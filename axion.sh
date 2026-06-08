#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# ============================================================
# Telegram Configurations & Helper Functions
# ============================================================
API_KEY="84855573-628b-4c94-bbd3-acd60fc90cb2"
TELEGRAM_BOT_TOKEN="8235509838:AAHUfOBE7Ni1I1xbX4zOg63TtMtXxsoUEhw"
TELEGRAM_CHAT_ID="-1003121331954"

# Helper to escape HTML characters for Telegram
escape_html() {
    echo "$1" | sed 's/&/\&amp;/g; s/</\&lt;/g; s/>/\&gt;/g'
}

# Helper to send message to Telegram
send_telegram() {
    local message="$1"
    local encoded_msg=$(echo "$message" | jq -sRr @uri)
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
        -d chat_id="${TELEGRAM_CHAT_ID}" \
        -d text="${encoded_msg}" \
        -d parse_mode="HTML" > /dev/null
}

# Helper to send file to Telegram
send_telegram_file() {
    local file_path="$1"
    local caption="$2"
    curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument" \
        -F chat_id="${TELEGRAM_CHAT_ID}" \
        -F document="@${file_path}" \
        -F caption="${caption}" > /dev/null
}

# Global Error Handler for command failures (ERR trap)
handle_error() {
    local exit_code=$?
    local line_no=$1
    local bash_command="$2"
    echo ">>> Error occurred on line $line_no: command '$bash_command' exited with status $exit_code"
    local msg="❌ <b>AxionOS Script Error!</b>
<b>Line:</b> ${line_no}
<b>Command:</b> <code>${bash_command}</code>
<b>Exit Code:</b> ${exit_code}"
    send_telegram "$msg"
}
trap 'handle_error $LINENO "$BASH_COMMAND"' ERR

# ============================================================
# Build Configurations
# ============================================================
DEVICE_REPO="https://github.com/axionplusx/device_xiaomi_miatoll.git"
DEVICE_BRANCH="16.2"

VENDOR_REPO="https://github.com/octasoul/vendor_xiaomi_miatoll.git"
VENDOR_BRANCH="16.2"

KERNEL_REPO="https://github.com/octasoul/kernel_xiaomi_sm6250.git"
KERNEL_BRANCH="nexus"

# ============================================================
# Install System Dependencies (Crucial for fresh Ubuntu VM)
# ============================================================
echo -e ">>> Installing/Updating required packages..."
sudo apt-get update -y
sudo apt-get install -y bc bison build-essential ccache curl flex g++-multilib \
    gcc-multilib git git-lfs gnupg gperf imagemagick libelf-dev libssl-dev \
    libxml2 libxml2-utils lzop squashfs-tools xsltproc zip zlib1g-dev \
    python3 python-is-python3 libncurses5-dev libncurses5

# Set up Git Identity if not already set
if [ -z "$(git config --global user.name)" ]; then
    echo -e ">>> Setting up Git Identity..."
    git config --global user.name "Axion Builder"
    git config --global user.email "builder@axion.local"
fi

# Set up Repo Tool
mkdir -p ~/bin
if [ ! -f ~/bin/repo ]; then
    echo -e ">>> Installing repo tool..."
    curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo
    chmod a+x ~/bin/repo
fi
export PATH=~/bin:$PATH

# Create build directory
mkdir -p ~/android
cd ~/android


# ============================================================
# Initialize AxionAOSP repo (LineageOS 23.2 / Android 16 QPR2)
# ============================================================
if [ ! -d .repo ]; then
    echo -e ">>> Initializing AxionAOSP repository (lineage-23.2)..."
    repo init -u https://github.com/AxionAOSP/android.git -b lineage-23.2 --git-lfs
    echo -e ">>> Repository initialized successfully."
fi

# ============================================================
# Clone device/vendor/kernel/hardware trees
# ============================================================
echo -e ">>> Cloning or Updating Device, Vendor, Kernel and Hardware Trees..."

# Helper function to clone repository only if it doesn't exist, otherwise update it
clone_repo() {
    local url="$1"
    local branch="$2"
    local path="$3"
    if [ ! -d "$path" ]; then
        echo -e ">>> Cloning $path ($branch)..."
        git clone "$url" -b "$branch" "$path"
    else
        echo -e ">>> $path already exists, pulling updates..."
        git -C "$path" pull || echo ">>> [Warning] Failed to pull updates for $path, keeping existing version."
    fi
}

# Clone Device Tree (from your custom GitHub repository)
clone_repo "$DEVICE_REPO" "$DEVICE_BRANCH" device/xiaomi/miatoll

# Clone Vendor Tree
clone_repo "$VENDOR_REPO" "$VENDOR_BRANCH" vendor/xiaomi/miatoll

# Clone Kernel Tree
clone_repo "$KERNEL_REPO" "$KERNEL_BRANCH" kernel/xiaomi/sm6250

# Clone Hardware and Dependency Trees
clone_repo https://github.com/LineageOS/android_hardware_xiaomi.git lineage-23.2 hardware/xiaomi
clone_repo https://github.com/LineageOS/android_hardware_sony_timekeep.git lineage-23.2 hardware/sony/timekeep
clone_repo https://github.com/mi-atoll/vendor_xiaomi_miuicamera-miatoll.git 16 vendor/xiaomi/miuicamera-miatoll

echo -e ">>> All device-specific trees cloned or updated successfully."

# ============================================================
# Sync remaining sources (Standard Repo Sync for VPS)
# ============================================================
echo -e ">>> Syncing remaining sources..."
repo sync -c -j$(nproc --all) --force-sync --no-clone-bundle --no-tags
echo -e ">>> Sync completed successfully."

# ============================================================
# Clean repo cache to free up disk space (Critical for 250GB Disk)
# ============================================================
echo -e ">>> Skipping cleaning of .repo folder to preserve Git metadata..."
# rm -rf .repo
echo -e ">>> Preserved .repo folder for future incremental builds."


# ============================================================
# Setup build environment and start compilation
# ============================================================
echo -e ">>> Setting up build environment..."
export ANDROID_KEY_PATH="vendor/lineage-priv/keys"
# Clean up the key directory to force regeneration of all keys
rm -rf "$ANDROID_KEY_PATH"
# Temporarily disable exit-on-error and ERR trap because build/envsetup.sh/make_key has traps/returns
set +e
trap - ERR
source build/envsetup.sh
set -e
trap 'handle_error $LINENO "$BASH_COMMAND"' ERR
echo -e ">>> Environment setup complete."

echo -e ">>> Configuring build target for AxionOS (miatoll GMS)..."
axion miatoll userdebug full
echo -e ">>> Build target set."

# Build Progress and Error Monitor Function
monitor_build() {
    local build_pid="$1"
    local log_file="$2"
    local start_time=$(date +%s)
    local last_progress_time=$start_time
    local interval=60 # Start with 1 minute interval (60s)

    send_telegram "🚀 <b>AxionOS Build Started!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 <b>Device:</b> miatoll (GMS)
⏳ <b>Updates:</b> Real-time (every 1 min) for 10 mins, then every 10 mins
🛡️ <b>Error monitoring:</b> Active
━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    while kill -0 "$build_pid" 2>/dev/null; do
        sleep 10
        local current_time=$(date +%s)
        
        # Calculate total elapsed time in seconds
        local total_elapsed=$((current_time - start_time))
        
        # Determine the current interval (1 minute for first 10 minutes, 10 minutes thereafter)
        if [ "$total_elapsed" -lt 600 ]; then
            interval=60
        else
            interval=600
        fi

        local elapsed=$((current_time - last_progress_time))
        
        if [ "$elapsed" -ge "$interval" ]; then
            last_progress_time=$current_time
            local duration=$(( total_elapsed / 60 ))
            
            # Extract build progress from log
            local progress=$(grep -o '\[[ ]*[0-9]*% [0-9]*/[0-9]*\]' "$log_file" | tail -n 1)
            if [ -z "$progress" ]; then
                progress="Configuring Build / Running Soong..."
            fi

            # System Stats
            local load_avg=$(awk '{print $1 ", " $2 ", " $3}' /proc/loadavg)
            local ram_usage=$(free -h | awk '/^Mem:/ {print $3 "/" $2}')
            local swap_usage=$(free -h | awk '/^Swap:/ {print $3 "/" $2}')
            local disk_usage=$(df -h / | awk 'NR==2 {print $3 "/" $2 " (" $5 ")"}')
            local ccache_size=$(ccache -s 2>/dev/null | grep -F "Cache size" | head -n 1 | awk -F': ' '{print $2}' | xargs)
            if [ -z "$ccache_size" ]; then
                ccache_size="N/A"
            fi

            local log_tail=$(tail -n 15 "$log_file")
            local escaped_log=$(escape_html "$log_tail")

            local msg="🔄 <b>AxionOS Build Progress Update</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📱 <b>Device:</b> miatoll
⏳ <b>Elapsed Time:</b> ${duration} minutes
📊 <b>Progress:</b> <code>${progress}</code>

💻 <b>System Status:</b>
  • <b>CPU Load (1m/5m/15m):</b> <code>${load_avg}</code>
  • <b>RAM Usage:</b> <code>${ram_usage}</code>
  • <b>Swap Usage:</b> <code>${swap_usage}</code>
  • <b>Disk Usage:</b> <code>${disk_usage}</code>
  • <b>CCache Size:</b> <code>${ccache_size}</code>

📜 <b>Recent Logs:</b>
<pre>${escaped_log}</pre>
━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            send_telegram "$msg"
        fi
    done

    # Wait for the background process to finish and get its exit status
    wait "$build_pid"
    local exit_status=$?

    if [ "$exit_status" -eq 0 ]; then
        send_telegram "✅ <b>AxionOS Build Completed Successfully!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ready to upload ROM files..."
    else
        local log_tail=$(tail -n 30 "$log_file")
        local escaped_log=$(escape_html "$log_tail")
        local msg="❌ <b>AxionOS Build Failed!</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Exit Status:</b> ${exit_status}
<b>Last 30 lines of log:</b>
<pre>${escaped_log}</pre>
Uploading the full build log..."
        send_telegram "$msg"
        send_telegram_file "$log_file" "Full Build Log for miatoll"
        
        # Clear ERR trap to prevent double error reporting and exit
        trap - ERR
        exit "$exit_status"
    fi
}

echo -e ">>> Starting compilation..."

# Unset Go memory limits to prevent CPU GC thrashing during Soong bootstrap
unset GOMEMLIMIT
unset GOGC

rm -f build.log
# Set pipefail to ensure if mka fails, the pipe exits with non-zero
set -o pipefail
# Run compilation in background and redirect output to build.log while printing to terminal via tee
(set -o pipefail; mka bacon -j$(nproc --all) 2>&1 | tee build.log) &
BUILD_PID=$!

# Run the build monitor in the foreground
monitor_build "$BUILD_PID" "build.log"
echo -e ">>> Compilation completed."

# ============================================================
# Upload ROM to PixelDrain and Notify via Telegram
# ============================================================
echo -e ">>> Searching for built ROM files..."
ROM_DIR="out/target/product/miatoll"

# Search for any flashable zip files starting with axion or lineage_miatoll
ROM_FILES=$(ls $ROM_DIR | grep -iE "^(axion|lineage_miatoll).*\.zip$")

if [[ -z "$ROM_FILES" ]]; then
    echo -e ">>> ERROR: No built ROM zip file found!"
    exit 1
fi

echo -e ">>> Found built ROM files:"
echo "$ROM_FILES"

for FILE in $ROM_FILES; do
    echo -e "\n>>> Uploading file: $FILE to PixelDrain..."
    UPLOAD_RESPONSE=$(curl -s -T "$ROM_DIR/$FILE" -u :$API_KEY https://pixeldrain.com/api/file/)
    FILE_ID=$(echo $UPLOAD_RESPONSE | grep -o '"id":"[^"]*"' | cut -d '"' -f4)
    
    if [[ -n "$FILE_ID" ]]; then
        DOWNLOAD_LINK="https://pixeldrain.com/u/$FILE_ID"
        echo -e ">>> Upload Successful! Download Link: $DOWNLOAD_LINK"

        # Extract build date from filename if possible
        BUILD_DATE=$(echo "$FILE" | grep -o "[0-9]\{8\}")
        if [[ -z "$BUILD_DATE" ]]; then
            BUILD_DATE=$(date "+%Y-%m-%d")
        fi

        UPLOADED_TIME=$(date "+%Y-%m-%d %H:%M:%S")

        # Prepare and send Telegram notification
        MESSAGE="📱 *AxionOS Build Uploaded Successfully*

*Rom Name:* \`${FILE}\`
*Build Date:* ${BUILD_DATE}
*Uploaded Time:* ${UPLOADED_TIME}

*Download Link:*
${DOWNLOAD_LINK}"

        curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
            -d chat_id="${TELEGRAM_CHAT_ID}" \
            -d text="$MESSAGE" \
            -d parse_mode="Markdown"

        echo -e ">>> Telegram notification sent successfully!"
    else
        echo -e ">>> Upload FAILED for file: $FILE"
        echo "Response: $UPLOAD_RESPONSE"
    fi
done

echo -e ">>> Build script execution completed!"

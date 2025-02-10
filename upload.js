const GITHUB_TOKEN = "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"; // ضع التوكن هنا
const OWNER = "AbdoAhmedElbanaa"; // ضع اسم المستخدم الخاص بك
const REPO = "cdnelbanaanet"; // ضع اسم المستودع الخاص بك

async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
        alert("يرجى اختيار ملف للرفع.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = async function (event) {
        const content = event.target.result.split(",")[1]; // تحويل الملف إلى Base64
        const path = file.name; // حفظ الملف في نفس المسار بدون مجلدات إضافية

        const url = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`;

        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `token ${GITHUB_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: `Upload ${file.name}`,
                content: content
            })
        });

        if (response.ok) {
            alert(`تم رفع الملف: ${file.name}`);
        } else {
            alert("فشل في الرفع. تحقق من التوكن والمستودع.");
        }
    };

    reader.readAsDataURL(file);
}

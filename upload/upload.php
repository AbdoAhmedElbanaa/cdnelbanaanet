<?php
header("Content-Type: application/json");

$GITHUB_USERNAME = "AbdoAhmedElbanaa";  // اسم المستخدم
$REPO_NAME = "cdnelbanaanet";  // اسم المستودع
$BRANCH = "main";  // اسم الفرع

// جلب التوكن من متغير بيئة
$GITHUB_TOKEN = getenv("GITHUB_TOKEN");

if (!$GITHUB_TOKEN) {
    echo json_encode(["success" => false, "message" => "لم يتم العثور على GitHub Token"]);
    exit;
}

if (!isset($_FILES["file"])) {
    echo json_encode(["success" => false, "message" => "لم يتم تحديد أي ملف"]);
    exit;
}

$file = $_FILES["file"];
$file_name = basename($file["name"]);
$file_content = file_get_contents($file["tmp_name"]);
$encoded_content = base64_encode($file_content);

// مسار الملف داخل المستودع
$file_path = "AbdoAhmedElbanaa/" . $file_name;
$github_api_url = "https://api.github.com/repos/$GITHUB_USERNAME/$REPO_NAME/contents/$file_path";
$headers = [
    "Authorization: token $GITHUB_TOKEN",
    "User-Agent: File-Uploader",
    "Content-Type: application/json"
];

// التحقق مما إذا كان الملف موجودًا
$ch = curl_init($github_api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode == 200) {
    $existing_file = json_decode($response, true);
    $sha = $existing_file['sha'];
} else {
    $sha = null;
}

// إنشاء بيانات الطلب
$data = [
    "message" => "Uploading $file_name",
    "content" => $encoded_content,
    "branch" => $BRANCH
];

if ($sha) {
    $data["sha"] = $sha;
}

$json_data = json_encode($data);

// تنفيذ الطلب لرفع الملف
$ch = curl_init($github_api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode == 201 || $httpCode == 200) {
    $response_data = json_decode($response, true);
    $file_url = $response_data["content"]["html_url"];
    echo json_encode(["success" => true, "file_url" => $file_url]);
} else {
    echo json_encode(["success" => false, "message" => "GitHub upload failed.", "response" => $response, "httpCode" => $httpCode]);
}
?>

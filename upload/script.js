async function uploadFile() {
    let fileInput = document.getElementById("fileInput");
    let message = document.getElementById("message");

    if (fileInput.files.length === 0) {
        message.innerText = "الرجاء اختيار ملف!";
        return;
    }

    let file = fileInput.files[0];
    let formData = new FormData();
    formData.append("file", file);

    message.innerText = "جاري رفع الملف...";

    let response = await fetch("upload.php", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    if (result.success) {
        message.innerHTML = `تم رفع الملف بنجاح! <br> <a href="${result.file_url}" target="_blank">فتح الملف</a>`;
    } else {
        message.innerText = "فشل في الرفع: " + result.message;
    }
}

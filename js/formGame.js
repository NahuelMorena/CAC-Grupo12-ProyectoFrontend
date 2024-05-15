function displayFileName() {
    var input = document.getElementById('imageUpload');
    var label = document.getElementById('uploadLabel');
    var fileName = input.files[0].name;
    label.innerHTML = "<br>" + fileName;
}
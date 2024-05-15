const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('txtName').value;
    const surname = document.getElementById('txtSurname').value;
    const year = document.getElementById('dateYear').value;
    const firstMovie = document.getElementById('firstMovie').value;
    const logoCharacter = document.getElementById('logoCharacter').value;
    const image = document.getElementById('imageUpload');

    const characterSelected = [];
    const checkboxes = document.querySelectorAll('input[name="character"]:checked');
    checkboxes.forEach(checkbox => {
        characterSelected.push(checkbox.value);
    })

    let repiceSelected = '';
    const radius = document.querySelectorAll('input[name="recipe"]');
    radius.forEach(radio => {
        if (radio.checked) {
            repiceSelected = radio.value;
        }
    })

    let img = '';
    if (image.files.length > 0) {
        const file = image.files[0];
        img = file.name;
    }

    alert(`Nombre: ${name}\nApellido: ${surname}\nEdad: ${year}\nPrimera película: ${firstMovie}\nPersonaje logo: ${logoCharacter}\nPersonajes seleccionados: ${characterSelected.join(', ')}\nReceta seleccionada: ${repiceSelected}\nImagen seleccionada: ${img}`)

})


function displayFileName() {
    var input = document.getElementById('imageUpload');
    var label = document.getElementById('uploadLabel');
    var fileName = input.files[0].name;
    label.innerHTML = "<br>" + fileName;
}
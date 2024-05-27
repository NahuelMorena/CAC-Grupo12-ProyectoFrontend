const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const fields = [
        { name: 'Nombre', id: 'txtName', variable: 'name' },
        { name: 'Apellido', id: 'txtSurname', variable: 'surname' },
        { name: 'Edad', id: 'dateYear', variable: 'year' },
        { name: 'Primera película', id: 'firstMovie', variable: 'firstMovie' },
        { name: 'Personaje del Logo', id: 'logoCharacter', variable: 'logoCharacter'}
    ];

    let firstEmptyField = null;
    const formData = {};

    for (const field of fields) {
        const value = document.getElementById(field.id).value;
        formData[field.variable] = value;
        if (!value) {
            firstEmptyField = field.name;
            break;
        }
    }

    const characterCheckboxes = document.querySelectorAll('input[name="character"]:checked');
    const recipeRadios = document.querySelectorAll('input[name="recipe"]:checked');
    if (!firstEmptyField && (characterCheckboxes.length === 0 || recipeRadios.length === 0)) {
        firstEmptyField = (characterCheckboxes.length === 0) ? 'Personajes' : 'Recetas';
    }

    if (firstEmptyField) {
        alert(`Por favor, complete el campo ${firstEmptyField}.`);
        return;
    }

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

    const image = document.getElementById('imageUpload');
    let img = '';
    if (image.files.length > 0) {
        const file = image.files[0];
        img = file.name;
    }

    alert(`Nombre: ${formData.name}\nApellido: ${formData.surname}\nEdad: ${formData.year}\nPrimera película: ${formData.firstMovie}\nPersonaje logo: ${formData.logoCharacter}\nPersonajes seleccionados: ${characterSelected.join(', ')}\nReceta seleccionada: ${repiceSelected}\nImagen seleccionada: ${img}`)

})


function displayFileName() {
    var input = document.getElementById('imageUpload');
    var label = document.getElementById('uploadLabel');
    var fileName = input.files[0].name;
    label.innerHTML = "<br>" + fileName;
}
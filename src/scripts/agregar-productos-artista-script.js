import { showAlert } from "./agregar-producto-validaciones.js";

const formObra = document.getElementById("formulario-producto");
const formArtista = document.getElementById("formulario-artista");
const contenerdorMensaje = document.getElementById("mensaje-producto");
const centerImageArtista = document.getElementById("centerImageArtista");
const fileInputArtista = document.getElementById('fileInputArtista');
const dropZoneArtista = document.getElementById('dropZone-artista');
//const btnToggleObra = document.querySelector("#toggle-form-btn-1");
const btnToggleArtista = document.querySelector("#toggle-form-btn-2");


let count = 0;
let imageUrls = []


/* btnToggleObra.addEventListener("click", (e) => {


    formObra.classList.add("visible-product")
    formArtista.classList.remove("visible-product")

}) */


btnToggleArtista.addEventListener("click", (e) => {
    if (count >= 1) {
        showAlert("Termina el formulario o recarga la pagina")
    } else {
        formObra.classList.remove("visible-product")
        formArtista.classList.add("visible-product")
    }

})

formArtista.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    const inputForm = new FormData(e.target);
    const valuesForm = Object.fromEntries(inputForm)
    const elemento = e.target.querySelectorAll("[data-artista]");
    let errorMessages = []
    let state;
    elemento.forEach(input => {
        state = formCheckvalues(input)
        if (state) {
            errorMessages.push(state);
        }

    })
    if (errorMessages.length > 0) {
        count++
        showAlert(errorMessages.join(","))
    } else {


        let dataPost = {}

        dataPost = { ...valuesForm, foto: imageUrls }



        // Verificar si existe artistas publicados en  el localStorage
        if (localStorage.getItem('artistasPerfil')) {
            // Si existe, recuperar el array y convertirlo a un objeto JavaScript
            const arrayArtistas = JSON.parse(localStorage.getItem('artistasPerfil'));

            // Agregar un nuevo elemento al array existente
            arrayArtistas.push(dataPost);

            // Convertir el array actualizado a cadena JSON y guardarlo en localStorage
            localStorage.setItem('artistasPerfil', JSON.stringify(arrayArtistas));
        } else {
            // Si el array no existe, crear un nuevo array con un elemento inicial
            const arrayArtistas = [dataPost];

            // Convertir el array a cadena JSON y guardarlo en localStorage
            localStorage.setItem('artistasPerfil', JSON.stringify(arrayArtistas));
        }
        e.target.parentElement.classList.add("visible-product");
        contenerdorMensaje.classList.remove("visible-product")


    }

    //console.log(valuesPictures);



})
centerImageArtista.addEventListener('click', () => {
    fileInputArtista.click();

});

// Agregar evento de cambio de archivo al input de archivo
fileInputArtista.addEventListener('change', handleFileSelect);


export function formCheckvalues(input) {
    const regex = {
        nombre: /^[a-zA-Z\s]+$/,
        sobremi: /^[a-zA-Z0-9]+$/,
        descripcion: /[a-zA-Z0-9]/,
        largo: /^\d+$/,
        ancho: /^\d+$/,
        precio: /^\d+$/,

    };
    if (input.value.length === 0) {
        return "El campo " + input.name + " es requerido \n"
    }
    if (input.name !== "foto" && input.value.length > 0) {
        if (!regex[input.name].test(input.value)) {
            return "-El campo " + input.name + " solo numeros o letras \n"

        }
    }
    return false
}

function handleFileSelect(event) {
    const files = event.target.files;

    imageUrls.push(files[0].name)
    handleFiles(files);
}

function handleFiles(files) {
    for (const file of files) {



        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {

                const image = new Image(300, 300);
                image.src = e.target.result;
                // Icono para eliminar la imagen
                const deleteIcon = document.createElement('span');
                deleteIcon.textContent = "delete"
                deleteIcon.className = 'material-symbols-outlined icon-position';
                //evento para remover las imagenes
                deleteIcon.addEventListener('click', (e) => {
                    preview.remove();
                    centerImageArtista.parentElement.classList.remove("visible-product");
                });
                const preview = document.createElement('div');
                preview.classList.add("image-preview-box-artista");

                preview.append(image)
                preview.append(deleteIcon)
                dropZoneArtista.prepend(preview);
                centerImageArtista.parentElement.classList.add("visible-product");
            };
            reader.readAsDataURL(file);
        } else {
            showAlert("Solo se permiten imágenes, Formato incorrecto")

        }
    }
}
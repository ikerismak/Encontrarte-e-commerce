import { formCheckvalues, handleDrop, handleFileSelect, imageUrls, showAlert } from "./agregar-producto-validaciones.js";

const contenerdorMensaje = document.getElementById("mensaje-producto");

/* const formSizes = document.getElementById("sizes-price");
const formLabel = document.getElementById("categorias");*/
const formObra = document.getElementById("formulario-producto");
const formArtista = document.getElementById("formulario-artista");
const containerLabel = document.getElementById("container-label");
const formPictures = document.getElementById("pinturas");
const btnToggleObra = document.querySelector("#toggle-form-btn-1");

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const centerImage = document.getElementById('centerImage');
/* const tableProduct = document.getElementById("table-product")*/
const btnAgregarLabel = document.getElementById("categoria-label");
export const showError = document.getElementById("alert-message")

export const alert = new bootstrap.Modal(document.getElementById('alert-modal'))


let count = 0
let counterSizePicture = 0
let counterLabel = 0
let dataPost = {}
let obra = {}
let pinturas = {};
export let medidas = {};
//let categoria = {};

let categoria = [];


btnToggleObra.addEventListener("click", (e) => {

    if (count >= 1) {
        showAlert("Termina el formulario o recarga la pagina")
    } else {
        formObra.classList.add("visible-product")
        formArtista.classList.remove("visible-product")
    }


})

//evento para recolectar todos los datos y crear el objeto
btnAgregarLabel.addEventListener("click", e => {
    e.preventDefault()
    const label = document.getElementById("select-option-categoria").value

    if (counterLabel < 2) {
        if (label.length != 0) {
            containerLabel.appendChild(generalLabel(label))
            counterLabel++
            //categoria[counterLabel] = label
            categoria.push(label);


        } else {
            showAlert("selecciona una categoria")
        }
    }
    else {
        showAlert("maximo 2 categorias")
    }


});
//evento para recolectar la titulo,imagenes,certificado

//localStorage.clear();

formPictures.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    const inputForm = new FormData(e.target);
    const valuesForm = Object.fromEntries(inputForm)
    const elemento = e.target.querySelectorAll("[data-type]");
    let errorMessages = []
    let state;
    elemento.forEach(input => {
        state = formCheckvalues(input)
        if (state) {
            errorMessages.push(state);
        }

    })
    if (errorMessages.length > 0) {
        showAlert(errorMessages.join(","))
        count++;
    } else {
        let imagen = []
        imageUrls.forEach((img, index) => {
            imagen.push(img)
        })



        dataPost = { ...valuesForm, imagen, categoria }
        //const objetoProducto = JSON.stringify(dataPost);
        //localStorage.setItem('obras', [objetoProducto]);

        //console.log(dataPost);


        // Verificar si existe obras en  el localStorage
        if (localStorage.getItem('obras')) {
            // Si existe, recuperar el array y convertirlo a un objeto JavaScript
            const arrayObras = JSON.parse(localStorage.getItem('obras'));

            // Agregar un nuevo elemento al array existente
            arrayObras.push(dataPost);

            // Convertir el array actualizado a cadena JSON y guardarlo en localStorage
            localStorage.setItem('obras', JSON.stringify(arrayObras));
        } else {
            // Si el array no existe, crear un nuevo array con un elemento inicial
            const arrayObras = [dataPost];

            // Convertir el array a cadena JSON y guardarlo en localStorage
            localStorage.setItem('obras', JSON.stringify(arrayObras));
        }
        e.target.parentElement.classList.add("visible-product");
        contenerdorMensaje.classList.remove("visible-product")


    }

    //console.log(valuesPictures);



})
//evento para recolectar los tamaños y crealos

/* formSizes.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    const inputForm = new FormData(e.target);
    const valuesPictures = Object.fromEntries(inputForm)
    const valuesPicturesArray = Object.values(valuesPictures)
    const elemento = e.target.querySelectorAll("[data-type]");
    let errorMessages = []
    let state;
    elemento.forEach(input => {
        state = formCheckSizes(input)
        if (state) {
            errorMessages.push(state);
        }
    })
    if (counterSizePicture >= 3) {
        showAlert("Solo se permiten 3 medidas por productos,si deseas agregar mas contacta a un administrador")
    } else {
        if (errorMessages.length > 0) {
            showAlert(errorMessages.join(","))
        } else {
            tableProduct.appendChild(createProductoRow(valuesPicturesArray, counterSizePicture))
            counterSizePicture++;
            medidas[counterSizePicture] = valuesPictures
        }
    }
})
//evento para recolectar la titulo,imagenes,certificado

formLabel.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    const labelForm = new FormData(e.target);
    const valueslabel = Object.fromEntries(labelForm)
    const label = Object.values(valueslabel)
    if (counterLabel < 2) {
        if (label.length != 0) {
            containerLabel.appendChild(generalLabel(label))
            counterLabel++
            categoria[counterLabel] = label


        } else {
            showAlert("selecciona una categoria")
        }
    }

    else { showAlert("maximo 2 categorias por obra") }
}) */
// Agregar evento de clic al centro de la imagen
centerImage.addEventListener('click', () => {
    fileInput.click();

});

// Agregar evento de cambio de archivo al input de archivo
fileInput.addEventListener('change', handleFileSelect);

// Agregar evento de soltar al área de soltar
dropZone.addEventListener('drop', handleDrop);
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('highlight');
});
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('highlight');
});

//funcion para crear la row de las dimenciones
function createProductoRow(values) {

    const row = document.createElement("div")
    const size = document.createElement("div")
    const price = document.createElement("div")
    const piece = document.createElement("div")
    const tecnique = document.createElement("div")
    const boxIcon = document.createElement("div")
    const icon = document.createElement("i")
    row.classList.add("row", "g-1");
    size.classList.add("col-4", "text-center")
    price.classList.add("col-2", "text-center")
    piece.classList.add("col-2", "text-center")
    tecnique.classList.add("col-3", "text-center")
    boxIcon.classList.add("col-1", "text-center")
    icon.classList.add("material-symbols-outlined", "icon-close", "delete-row", "align-middle")

    size.textContent = values[0] + " x " + values[1]
    price.textContent = values[2]
    piece.textContent = values[3]
    tecnique.textContent = values[4]
    icon.textContent = "close"
    icon.addEventListener("click", () => {
        delete medidas[counterSizePicture]
        counterSizePicture--;
        row.remove();
    });
    boxIcon.appendChild(icon)
    row.appendChild(size)
    row.appendChild(price)
    row.appendChild(piece)
    row.appendChild(tecnique)
    row.appendChild(boxIcon)

    return row


}

// funcion para crear las categorias 
function generalLabel(label) {
    let div = document.createElement("div")
    let span = document.createElement("span")
    let i = document.createElement("i");

    div.classList.add("align-middle", "label-box")
    span.classList.add("etiquetas");
    span.textContent = label
    i.classList.add("material-symbols-outlined", "align-middle", "icon-close");
    i.textContent = "close";
    i.addEventListener("click", () => {
        //delete categoria[counterLabel]
        counterLabel--;
        categoria.pop();
        div.remove();
    })
    div.appendChild(span)
    div.appendChild(i)
    return div
}
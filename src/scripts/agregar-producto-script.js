import { formCheckPictures, formCheckSizes, handleDrop, handleFileSelect, imageUrls, showAlert } from "./agregar-producto-validaciones.js";

const formLabel = document.getElementById("categorias");
const formPictures = document.getElementById("pinturas");
const formSizes = document.getElementById("sizes-price");
const containerLabel = document.getElementById("container-label");
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const centerImage = document.getElementById('centerImage');
const tableProduct = document.getElementById("table-product")
const btnPublicar = document.getElementById("publicar-obra");
export const showError = document.getElementById("alert-message")

export const alert = new bootstrap.Modal(document.getElementById('alert-modal'))



let counterSizePicture = 0
let counterLabel = 0
let obra = {}
let pinturas = {};
export let medidas = {};
let categoria = {};





btnPublicar.addEventListener("click", e => {
    e.preventDefault()
    let longitudPintura = Object.keys(pinturas).length;
    let longitudCategoria = Object.keys(categoria).length;
    let longitudMedida = Object.keys(medidas).length;
    let mensaje = []
    if (longitudCategoria == 0) {
        mensaje.push("falta agregar  categorias")
    }
    if (longitudPintura == 0) {
        mensaje.push("falta agregar  titulo,certifados,imagenes")
    }
    if (longitudMedida == 0) {
        mensaje.push("falta agregar  medidas")
    }
    if (mensaje.length === 0) {
        let obras = { pinturas, medidas, categoria }
        console.log(obras);
    }
    else {
        showAlert(mensaje.join(","))
    }

});
formPictures.addEventListener("submit", e => {
    e.preventDefault();
    e.stopPropagation();
    const inputForm = new FormData(e.target);
    const valuesPictures = Object.fromEntries(inputForm)
    const valuesPicturesArray = Object.values(valuesPictures)
    const elemento = e.target.querySelectorAll("[data-type]");
    const inputImg = document.getElementById('fileInput');
    let errorMessages = []
    let state;
    elemento.forEach(input => {
        state = formCheckPictures(input)
        if (state) {
            errorMessages.push(state);
        }

    })
    if (errorMessages.length > 0) {
        showAlert(errorMessages.join(","))
    } else {
        let imagen = {}
        imageUrls.forEach((img, index) => {
            imagen[index] = img
        })
        pinturas["titulo"] = valuesPicturesArray[0]
        pinturas["certificado"] = valuesPicturesArray[1]
        pinturas["descripcion"] = valuesPicturesArray[2]
        pinturas["imagenes"] = imagen;


    }



})
formSizes.addEventListener("submit", e => {
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
})
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
        delete categoria[counterLabel]
        div.remove();
    })
    div.appendChild(span)
    div.appendChild(i)
    return div
}
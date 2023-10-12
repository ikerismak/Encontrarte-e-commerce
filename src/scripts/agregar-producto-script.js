const formLabel = document.getElementById("categoria");
const formPictures = document.getElementById("pinturas");
const containerLabel = document.getElementById("container-label");
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const centerImage = document.getElementById('centerImage');
const showError = document.getElementById("alert-message")
const tableProduct = document.getElementById("table-product")
const alert = new bootstrap.Modal(document.getElementById('alert-modal'))


let imageCount = 0;


function showAlert(message) {
    showError.textContent = message
    alert.toggle()
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
        div.remove();
    })
    div.appendChild(span)
    div.appendChild(i)
    return div
}
function TipoDeError(tipoDeInput, valorDelInput) {
    if (valorDelInput.length == 0) {
        console.log("zero");
    }

    if (!regexPattern[tipoDeInput].test(valorDelInput)) {
        console.log("invalido", valorDelInput);

        return ["invalido", false]
    }

    return ["valido", true]

}
function formCheckPicture(input) {
    const regexNumber = /^\d+$/;
    if (input.value.length === 0) {
        showAlert("todos lon campos son requeridos verifiquelos de nuevo")
        return false
    }
    if (input.name !== "tecnica" && !regexNumber.test(input.value)) {
        showAlert("solo se aceptan numeros en " + input.name)
        return false
    }
    return true
}




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
formPictures.addEventListener("submit", event => {
    event.preventDefault();
    event.stopPropagation();
    const inputForm = new FormData(event.target);
    const valuesPictures = Object.fromEntries(inputForm)
    const valuesPicturesArray = Object.values(valuesPictures)
    const elemento = event.target.querySelectorAll("[data-type]");
    let allChecked = []
    elemento.forEach(input => {
        allChecked.push(formCheckPicture(input))
    })

    if (allChecked.every(input => input)) {
        tableProduct.appendChild(createProductoRow(valuesPicturesArray))
    }
})
formLabel.addEventListener("submit", event => {
    event.preventDefault();
    event.stopPropagation();
    const label = Array.from(formLabel)[0].value
    if (label.length != 0) {
        containerLabel.appendChild(generalLabel(label))

    }
    else { showAlert("selecciona una categoria") }
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

function handleFileSelect(event) {
    const files = event.target.files;
    handleFiles(files);
}

function handleDrop(event) {
    event.preventDefault();
    dropZone.classList.remove('highlight');
    const files = event.dataTransfer.files;
    handleFiles(files);
}
//funcion para agregar las clase  y mostrar el mensaje por medio del dom
function mostrarMensajeDeError(elemento, mensaje, estadoDelError) {
    //agregamos al elemento padre la clase para mostrar el mensaje
    elemento.parentElement.classList.add("was-validated");
    //returna un true si  la validacion fue exitosa y false si fue invalido
    if (estadoDelError) {
        //si la validacion es true  limpiamos el mensaje 
        elemento.textContent = "";
    } else {
        //si la validacion es falsa agregamos un mensaje 
        elemento.textContent = mensaje
    }
}


function handleFiles(files) {
    for (const file of files) {
        if (imageCount >= 4) {
            showAlert("Solo se permiten 4 imágenes.")
            //mostrarMensajeDeError(showError, 'Solo se permiten 4 imágenes.', false);
            return;
        }


        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {

                const image = new Image(200, 150);
                image.src = e.target.result;
                // Icono para eliminar la imagen
                const deleteIcon = document.createElement('span');
                deleteIcon.textContent = "delete"
                deleteIcon.className = 'material-symbols-outlined icon-position';

                deleteIcon.addEventListener('click', (e) => {
                    imageCount--;
                    preview.remove();
                });
                const preview = document.createElement('div');
                preview.classList.add("image-preview-box");

                preview.append(image)
                preview.append(deleteIcon)
                dropZone.prepend(preview);
                imageCount++;
            };
            reader.readAsDataURL(file);
        } else {
            showAlert("Solo se permiten imágenes, Formato incorrecto")

        }
    }
}

import { alert, medidas, showError } from "./agregar-producto-script.js";
let imageCount = 0;
export const imageUrls = [];

export function showAlert(message) {
    showError.textContent = message
    alert.toggle()
}

export function TipoDeError(tipoDeInput, valorDelInput) {
    if (valorDelInput.length == 0) {
        console.log("zero");
    }

    if (!regexPattern[tipoDeInput].test(valorDelInput)) {
        console.log("invalido", valorDelInput);

        return ["invalido", false]
    }

    return ["valido", true]

}
export function formCheckSizes(input) {
    const regexNumber = /^\d+$/;
    if (input.value.length === 0) {
        return "El campo " + input.name + " es requerido"
    }
    if (input.name !== "tecnica" && !regexNumber.test(input.value)) {
        return "El campo " + input.name + " solo numeros"
    }
    return false
}
export function formCheckPictures(input) {
    const regex = {
        titulo: /^[a-zA-Z]+$/,
        certificado: /^[a-zA-Z0-9]+$/,
        descripcion: /[a-zA-Z0-9]/,
    };
    if (input.value.length === 0 && input.name !== "descripcion") {
        return "El campo " + input.name + " es requerido \n"
    }
    if (input.name !== "imagen" && input.value.length > 0) {
        if (!regex[input.name].test(input.value)) {
            return "-El campo " + input.name + " solo numeros o letras \n"

        }
    }
    return false
}



export function handleFileSelect(event) {
    const files = event.target.files;
    imageUrls.push(files[0].name)
    handleFiles(files);
}

export function handleDrop(event) {
    event.preventDefault();
    dropZone.classList.remove('highlight');
    const files = event.dataTransfer.files;
    handleFiles(files);
}
//funcion para agregar las clase  y mostrar el mensaje por medio del dom
export function mostrarMensajeDeError(elemento, mensaje, estadoDelError) {
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


export function handleFiles(files) {
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
                    imageUrls.pop()
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

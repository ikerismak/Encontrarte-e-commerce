const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const centerImage = document.getElementById('centerImage');
const showError = document.getElementById("alert-message")
const alert = new bootstrap.Modal(document.getElementById('alert-modal'))


let imageCount = 0;

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
            showError.textContent = "Solo se permiten 4 imágenes."
            alert.toggle()
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
            showError.textContent = "Solo se permiten imágenes, Formato incorrecto"
            alert.toggle()
        }
    }
}

const regexMensage = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ,?!.()\s]+$/;
const regexTelefono = /^\d{10}$/;
const regexCorreo = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexNombre = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,20}$/;

const regexPattern = {
    nombre: regexNombre,
    apellido: regexNombre,
    correo: regexCorreo,
    telefono: regexTelefono,
    mensaje: regexMensage,

}
const limiteInput = {
    nombre: { min: 3, max: 20, },
    apellido: { min: 2, max: 20, },
    correo: { min: 5, max: 30, },
    telefono: { min: 10, max: 10, },
    mensaje: { min: 25, max: 500, },

}

const mensajesDeError = {

    nombre: {
        vacio: "Campo requerido escriba un nombre",
        invalido: "Solo se aceptan letras ",
        minimo: "longitud minima de " + limiteInput.nombre.min + " letras",
        maximo: "longitud maxima de " + limiteInput.nombre.max + " letras"

    },
    apellido: {
        vacio: "Campo requerido escriba un apellido",
        invalido: "Solo se aceptan letras",
        minimo: "longitud minima de " + limiteInput.apellido.min + " letras",
        maximo: "longitud maxima de " + limiteInput.apellido.max + " letras"
    },
    correo: {
        vacio: "Campo requerido escriba un correo",
        invalido: "Correo Invalido solo se aceptan numeros,letras,puntos y guiones bajo",
        minimo: "longitud minima de " + limiteInput.correo.min + " caracteres",
        maximo: "longitud maxima de " + limiteInput.correo.max + " caracteres"
    },
    telefono: {
        vacio: "Campo requerido escriba numero teléfonico",
        invalido: "El formato requerido es 999999999 digitos",
        minimo: "longitud minima de " + limiteInput.telefono.min + " digitos",
        maximo: "longitud maxima de " + limiteInput.telefono.max + " digitos"
    },
    mensaje: {
        vacio: "Campo requerido deje un mensaje",
        invalido: "Mensaje invalido solo se permite los letras,numeros y los caracteres ,?!.()",
        minimo: "Escriba un mensaje con " + limiteInput.mensaje.min + " letras minimo",
        maximo: "Escriba un mensaje con " + limiteInput.mensaje.max + " letras maximo"
    },
    checkbox: {
        vacio: "Acepte el acuerdo de Términos y Condiciones."
    },
    select: { vacio: "seleciones una opción" },

};


function TipoDeError(tipoDeInput, valorDelInput) {
    if (valorDelInput.length == 0) {
        console.log("zero");
        return ["vacio", false]
    }
    if (valorDelInput.length < limiteInput[tipoDeInput].min) {
        console.log("min");
        return ["minimo", false]
    }
    if (valorDelInput.length > limiteInput[tipoDeInput].max) {
        console.log("max");
        return ["maximo", false]
    }

    if (!regexPattern[tipoDeInput].test(valorDelInput)) {
        console.log("invalido", valorDelInput);

        return ["invalido", false]
    }

    return ["valido", true]

}

function mostrarMensajeDeError(tipoDeInput, tipoDeError, estadoDelError, elemento) {
    elemento.parentElement.classList.add("was-validated");
    if (estadoDelError) {
        elemento.setCustomValidity("")
        elemento.parentElement.querySelector(".valid-feedback").textContent = "";
        return true
    } else {
        elemento.setCustomValidity(" ")
        elemento.parentElement.querySelector(".invalid-feedback").textContent =
            mensajesDeError[tipoDeInput][tipoDeError];
        return false
    }
}
export function validarInput(input) {
    const tipoDeInput = input.dataset.type;
    const valorDelInput = input.value;
    const error = TipoDeError(tipoDeInput, valorDelInput);

    return mostrarMensajeDeError(tipoDeInput, error[0], error[1], input)

}




export function validarOptiones(input) {

    const tipoDeInput = input.dataset.option;
    const valorDelInput = input.value;
    const errorEstado = valorDelInput.length !== 0;
    return mostrarMensajeDeError(tipoDeInput, "vacio", errorEstado, input)

}


export function validarCheckbox(input) {
    const tipoDeInput = input.dataset.check;
    const errorEstado = input.checked;
    return mostrarMensajeDeError(tipoDeInput, "vacio", errorEstado, input)


}





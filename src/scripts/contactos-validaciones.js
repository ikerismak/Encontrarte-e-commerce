
//aqui se guardan las expresiones regulares
const regexMensage = /^[a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ,?!.()\s]+$/;
const regexTelefono = /^\d{10}$/;
const regexCorreo = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexNombre = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,20}$/;

//guardamos las expresiones  en un objeto
const regexPattern = {
    nombre: regexNombre,
    apellido: regexNombre,
    correo: regexCorreo,
    telefono: regexTelefono,
    mensaje: regexMensage,

}

//limite del minimo y maximo para los campos
const limiteInput = {
    nombre: { min: 3, max: 20, },
    apellido: { min: 2, max: 20, },
    correo: { min: 5, max: 30, },
    telefono: { min: 10, max: 10, },
    mensaje: { min: 25, max: 500, },

}


//objeto con todos los mensajes a mostrar
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

//funcion para validar que tipo de error para mostrar mensaje y el status es existe error o no
function TipoDeError(tipoDeInput, valorDelInput) {
    if (valorDelInput.length == 0) {
        return ["vacio", false]
    }
    if (valorDelInput.length < limiteInput[tipoDeInput].min) {
        return ["minimo", false]
    }
    if (valorDelInput.length > limiteInput[tipoDeInput].max) {
        return ["maximo", false]
    }

    if (!regexPattern[tipoDeInput].test(valorDelInput)) {

        return ["invalido", false]
    }

    return ["valido", true]

}
//funcion para agregar las clase  y mostrar el mensaje por medio del dom
function mostrarMensajeDeError(tipoDeInput, tipoDeError, estadoDelError, elemento) {
    //agregamos al elemento padre la clase para mostrar el mensaje
    elemento.parentElement.classList.add("was-validated");
    //returna un true si  la validacion fue exitosa y false si fue invalido
    if (estadoDelError) {
        //si la validacion es true  limpiamos el mensaje 
        elemento.setCustomValidity("")
        elemento.parentElement.querySelector(".valid-feedback").textContent = "";
        return true
    } else {
        //si la validacion es falsa agregamos un mensaje 
        elemento.setCustomValidity(" ")
        elemento.parentElement.querySelector(".invalid-feedback").textContent =
            mensajesDeError[tipoDeInput][tipoDeError];
        return false
    }
}
//validamos los inputs y textare
export function validarInput(input) {
    const tipoDeInput = input.dataset.type; //tipo del  dataset para sabe que input fue ingresado
    const valorDelInput = input.value; //valor del imput
    //obtenemos el mensaje si fue  invalido y el estado false para un mensaje y true no mostrar y otro para no link
    const error = TipoDeError(tipoDeInput, valorDelInput);
    // retornamos un false o true si  la validacion fue exitoso o erronea
    return mostrarMensajeDeError(tipoDeInput, error[0], error[1], input)

}



//validamos los select
export function validarOptiones(input) {

    const tipoDeInput = input.dataset.option;//tipo del  dataset para sabe que input fue ingresado
    const valorDelInput = input.value; //valor del input
    const errorEstado = valorDelInput.length !== 0; //si  existe error
    return mostrarMensajeDeError(tipoDeInput, "vacio", errorEstado, input)

}

//validamos los checkbox
export function validarCheckbox(input) {
    const tipoDeInput = input.dataset.check;//tipo del  dataset para sabe que input fue ingresado
    const errorEstado = input.checked; //estado del checkbox para ver si existe error
    return mostrarMensajeDeError(tipoDeInput, "vacio", errorEstado, input)


}





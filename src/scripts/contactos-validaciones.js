export function validar(input) {
    const tipoDeInput = input.dataset.type;
    console.log(tipoDeInput, input.validity)

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if (input.validity.valid) {

        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".invalid-feedback").textContent = "";
    } else {
        input.parentElement.classList.add("was-validated");
        input.parentElement.querySelector(".invalid-feedback").textContent =
            mostrarMensajeDeError(tipoDeInput, input);
    }

}

const expresionTelefono = /^[0-9]{10}$/;
const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const expresionNombres = /^[A-Za-z]+ [A-Za-z]+$/

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "tooShort"
];

const mensajesDeError = {

    nombre: {
        patternMismatch: "un nombre con al menos 3 letras",
        valueMissing: "El campo nombre no puede estar vacío",
    },
    apellido: {
        patternMismatch: "un apellido con al menos 2 letras",
        valueMissing: "El campo nombre no puede estar vacío",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
            "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    motivo: {
        valueMissing: "Escribe un mensaje",
        tooShort: "Debes escribir al menos 25 letras",
    },
    telefono: {
        valueMissing: "El campo no puede estar vacío",
        patternMismatch: "El formato requerido es xxxxxxxxxx 10 digitos",
    },
    direccion: {
        valueMissing: "El campo no puede estar vacío",
        typeMismatch: "La direccion debe contener entre 10 a 40 caracteres",
    },
    ciudad: {
        valueMissing: "El campo no puede estar vacío",
        typeMismatch: "La direccion debe contener entre 10 a 40 caracteres",
    },
    estado: {
        valueMissing: "El campo no puede estar vacío",
        typeMismatch: "La direccion debe contener entre 10 a 40 caracteres",
    },
};


const validadores = {
    nacimiento: (input) => validarNacimiento(input),
    mail: "",

}


function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            // console.log(tipoDeInput, error);
            /* console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            );*/
            mensaje = mensajesDeError[tipoDeInput][error];

        }
    });
    return mensaje;
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;

}



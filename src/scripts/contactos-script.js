import { validarCheckbox, validarInput, validarOptiones } from "./contactos-validaciones.js";

(() => {
    'use strict'

    //input[id^="validationCustom
    const inputs = document.querySelectorAll('[data-type]') //inputs y textarea
    const form = document.querySelector("#formulario-contacto")//formulario
    const option = document.querySelector("#select-option");//select
    const check = document.querySelector("#checkboxvalido");//checkbox
    const mensajeCompletado = document.querySelector("#mensaje-exitoso");//mensaje para mostrar al finalizar el envio
    let isInputs = false; //true si todos los input y are son validos
    let isOptions = false; //true si el option es valido
    let isCheckbox = false;//true si el checkbox es  validado




    // validamos cada input y el text area
    inputs.forEach(input => {
        input.addEventListener('blur', event => {
            event.preventDefault()
            event.stopPropagation()

            //validamos todos los inputs y textarea
            isInputs = validarInput(event.target)

        }, false)
    })

    //validamos el select  de opciones
    option.addEventListener("change", event => {
        //validar el select
        isOptions = validarOptiones(option)

    })//validamos el checkbox

    //validamos el formulario cuando el boton es enviado
    form.addEventListener('submit', event => {

        //detenemos el comportamiento por default del formulario en el navegador
        event.preventDefault()
        event.stopPropagation()


        inputs.forEach(input => {
            isInputs = validarInput(input)
        })
        isOptions = validarOptiones(option)
        if (isInputs && isOptions) {
            //valores para enviar al formulario
            const valuesForm = Object.fromEntries(new FormData(event.target))
            form.parentElement.classList.add("oculto")
            mensajeCompletado.classList.remove("oculto")

            localStorage.setItem('usuario', JSON.stringify(valuesForm));

        }
        form.classList.add('was-validated')
    }, false)


})()



import { validarCheckbox, validarInput, validarOptiones } from "./contactos-validaciones.js";

(() => {
    'use strict'

    //input[id^="validationCustom
    const inputs = document.querySelectorAll('[data-type]') //inputs y textarea
    const form = document.querySelector('.needs-validation')//formulario
    const option = document.querySelector("#select-option");//select
    const check = document.querySelector("#checkbox");//checkbox
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
    check.addEventListener("change", event => {
        //validamos  el checkbox
        isCheckbox = validarCheckbox(check)
    })
    //validamos el formulario cuando el boton es enviado
    form.addEventListener('submit', event => {

        //detenemos el comportamiento por default del formulario en el navegador
        event.preventDefault()
        event.stopPropagation()


        inputs.forEach(input => {
            isInputs = validarInput(input)
        })
        isOptions = validarOptiones(option)
        isCheckbox = validarCheckbox(check)
        console.log(isInputs, isCheckbox, isOptions);
        if (isInputs && isCheckbox && isOptions) {
            /*  form.parentElement.classList.add("oculto")
             mensajeCompletado.classList.remove("oculto") */

        }
        form.classList.add('was-validated')
    }, false)


})()


/* (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('input[id^="validationCustom"]')
    // Loop over them and prevent submission
    forms.forEach(form => {
        form.addEventListener('blur', event => {
            console.log(form.checkValidity());
            console.log(form);
            console.log("evento" + event.target);
            if (form.checkValidity()) {
                console.log(form);
                event.preventDefault()
                event.stopPropagation()
            }

            form.parentElement.classList.add('was-validated')
        }, false)
    })
})() */
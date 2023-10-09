import { validarCheckbox, validarInput, validarOptiones } from "./contactos-validaciones.js";

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //const inputs = document.querySelectorAll('input[id^="validationCustom"]')
    const inputs = document.querySelectorAll('[data-type]')
    const form = document.querySelector('.needs-validation')
    const option = document.querySelector("#select-option");
    const check = document.querySelector("#checkbox");
    const mensajeCompletado = document.querySelector("#mensaje-exitoso");
    let isInputs = false;
    let isOptions = false;
    let isCheckbox = false;





    // Loop over them and prevent submission
    inputs.forEach(input => {
        input.addEventListener('blur', event => {
            event.preventDefault()
            event.stopPropagation()
            isInputs = validarInput(event.target)

        }, false)
    })
    option.addEventListener("change", event => {
        isOptions = validarOptiones(option)

    })
    check.addEventListener("change", event => {
        isCheckbox = validarCheckbox(check)
    })

    form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()


        inputs.forEach(input => {
            isInputs = validarInput(input)
        })
        isOptions = validarOptiones(option)
        isCheckbox = validarCheckbox(check)
        console.log(isInputs, isCheckbox, isOptions);
        if (isInputs && isCheckbox && isOptions) {
            form.parentElement.classList.add("oculto")
            mensajeCompletado.classList.remove("oculto")

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
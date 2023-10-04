import { validar } from "./contactos-validaciones.js";

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //const inputs = document.querySelectorAll('input[id^="validationCustom"]')
    const inputs = document.querySelectorAll('[data-type]')
    const form = document.querySelector('.needs-validation')



    // Loop over them and prevent submission
    inputs.forEach(input => {
        input.addEventListener('blur', event => {
            validar(event.target)
            if (!input.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            input.parentElement.classList.add('was-validated')
        }, false)
    })
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
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
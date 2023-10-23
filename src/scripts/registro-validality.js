// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')



    const regexTelefono = /^\d{10}$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexNombre = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            const inputName = document.getElementById("validationName").value;
            const inputTelefono = document.getElementById("validationTelefono").value;
            const inputCorreo = document.getElementById("validationmail").value;
            const inputPassword = document.getElementById("validationPassword").value;
            event.preventDefault()
            event.stopPropagation()
            const mensajesAlertas = []
            console.log(inputName, inputCorreo, inputPassword, inputTelefono);
            console.log(regexTelefono.test(inputTelefono), regexCorreo.test(inputCorreo));
            if (inputTelefono.length == 0) {
                mensajesAlertas.push("-el telefono no puede estar vacio\n");
            }
            else if (!regexTelefono.test(inputTelefono)) {
                mensajesAlertas.push("-solo puede tener numero y debe ser de 10 digitos\n");

            }
            else if (inputCorreo.length == 0) {
                console.log(inputCorreo);
                mensajesAlertas.push("-el correo no puede estar vacio\n");
            }
            else if (!regexCorreo.test(inputCorreo)) {
                mensajesAlertas.push("-correo no valido\n");
            }
            else if (mensajesAlertas.length > 0) {
                alert(mensajesAlertas.join())
            }


            form.classList.add('was-validated')
        }, false)
    })
})()
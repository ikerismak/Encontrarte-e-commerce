

onload = function () {
    var telefono = document.querySelectorAll('.validanumericos')[0];
    var nombre = document.querySelectorAll('.nombre')[0];
    var correoRegistro = document.querySelectorAll('.correoRegistro')[0];
    var passRegistro = document.querySelectorAll('.passRegistro1')[0];
    var passRegistroConfirmar = document.querySelectorAll('.passRegistro2')[0];


    telefono.onkeypress = function (e) {
        if (isNaN(this.value + String.fromCharCode(e.charCode)))
            return false;
    }
    telefono.onpaste = function (e) {
        e.preventDefault();
    }

    nombre.onkeypress = function (e) {
        console.log(e.keyCode);
        if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 96 && e.keyCode < 123) || (e.keyCode == 32) || (e.keyCode > 163 && e.keyCode < 166)) {
            return true;
        } else {
            return false;
        }
    }

    nombre.onpaste = function (e) {
        e.preventDefault();
    }



    correoRegistro.onpaste = function (e) {
        e.preventDefault();
    }

    passRegistro.onkeypress = function (e) {

    }

    passRegistro.onpaste = function (e) {
        e.preventDefault();
    }

    passRegistroConfirmar.onkeypress = function (e) {

    }

    passRegistroConfirmar.onpaste = function (e) {
        e.preventDefault();
    }
}

function validarCorreo() {
    var correo = document.getElementById('inputemail').value;
    var expr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(!expr.test(correo));
    if (!expr.test(correo)) {
        return false;
    } else {
        return true;
    }

}



function validarPass() {
    var password = document.getElementsByClassName('pass').value;
    var expr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(!expr.test(password));
    if (!expr.test(password)) {
        return false;
    }
    else {
        return true;
    }

}



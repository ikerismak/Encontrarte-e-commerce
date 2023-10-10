const btnSignUp = document.querySelector("#toggle-signup") //boton de registro
const btnLogin = document.querySelector("#toggle-login")//boton de login
const loginForm = document.querySelector(".modal-login")//elemento contenedor del login
const signUp = document.querySelector(".modal-registro")//elemento contenedor del registro

//cuando click al boton de cambio  registro a login se ejecuta la arrow function event
btnSignUp.addEventListener("click", event => {

    loginForm.classList.remove("visibilty");// removemos la clase del elemento login para mostrar el login
    signUp.classList.add("visibilty");// agregamos la clase al elemento registro para ocultar el registro 
})

//cuando click al boton de cambio  login a registro se ejecuta la arrow function event
btnLogin.addEventListener("click", event => {


    signUp.classList.remove("visibilty");// removemos la clase del elemento registro para mostrar el registro
    loginForm.classList.add("visibilty");// agregamos la clase al elemento login para ocultar el login
})

const modal = document.getElementById('staticBackdrop');
const modalBackdrop = document.querySelector('.modal');
modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
        modal.style.display = 'none';
        modalBackdrop.style.display = "none";
    }
});

// Obtén una referencia al formulario
const userForm = document.getElementById('formulario');

// Agrega un evento de envío al formulario
userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('inputName').value;
    const telefono = document.getElementById('inputnumber').value;
    const email = document.getElementById('inputemail').value;
    const pass = document.getElementById('password').value;

    // Crea un objeto JSON con los valores del formulario
    const usuario = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        pass: pass
    };

    // Imprime el objeto JSON en la consola
    console.log(usuario);

    // Puedes realizar otras acciones aquí, como enviar el objeto JSON a un servidor
});






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
const barra1 = document.querySelector(".barraMenu1");
const barra2 = document.querySelector(".barraMenu2");
const barra3 = document.querySelector(".barraMenu3");

const menuBurguerContenedor= document.querySelector(".menuBurguerContenedor");

menuBurguerContenedor.addEventListener("click",animarBarras);

function animarBarras(){
    console.log("activaFuncion");
    barra1.classList.toggle("activoBarraMenu1");
    barra2.classList.toggle("activoBarraMenu2");
    barra3.classList.toggle("activoBarraMenu3");
   menuBurguerContenedor.classList.toggle("active");


    

    //.classList.toggle("activeline1__bars-menu");
}




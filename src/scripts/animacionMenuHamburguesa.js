const barra1 = document.querySelector(".barraMenu1");
const barra2 = document.querySelector(".barraMenu2");
const barra3 = document.querySelector(".barraMenu3");
let moved = false;
const menuBurguerContenedor= document.querySelector(".menuBurguerContenedor");

menuBurguerContenedor.addEventListener("click",animarBarras);

function animarBarras(){
    console.log("activaFuncion");
    barra1.classList.toggle("activoBarraMenu1");
    barra2.classList.toggle("activoBarraMenu2");
    barra3.classList.toggle("activoBarraMenu3");
   menuBurguerContenedor.classList.toggle("active");
   moveBox();


    

    //.classList.toggle("activeline1__bars-menu");
}





function moveBox() {
  const box = document.querySelector(".menuBurguerContenedor");;

  if (!moved) {
    box.style.transform = 'translateY(-130px)'; // Desplazar el div hacia la derecha
  } else {
    box.style.transform = 'translateY(0)'; // Regresar el div a la posición inicial
  }

  moved = !moved;
}
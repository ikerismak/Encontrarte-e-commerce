const botonAbrir= document.getElementById("botonAbrir");
const botonCerrar= document.getElementById("botonCerrar");
const contenedorNavList= document.getElementById("contenedorNavList");
const navList = document.getElementById("navList");
let styleNavList= window.getComputedStyle(navList);// asi guaramos un objeto que tendrá los valores del CSS de contenedor navList
let styleContenedorNavList= window.getComputedStyle(contenedorNavList);// asi guaramos un objeto que tendrá los valores del CSS de contenedor navList
let direccionNavList;    
let visibilityContenedorNavList;
botonAbrir.addEventListener("click",()=>{
botonCerrar.classList.add("visible")
contenedorNavList.classList.add("visible"); 
});

botonCerrar.addEventListener("click",()=>{
    contenedorNavList.classList.remove("visible");
    botonCerrar.classList.remove("visible");
});
// Agrega un listener para cuando se haga un resize cambie la probiedad del botón 
//la siguiente función sirve para poder arreglar un bug del boton de cerrar, de tal manera que se remueve el visible al boton cuando se agranda la pantalla teniendo abierta la navbar y se agrega el visible cuando se hace pequña y se esta mostrando el contenedor de la navList y y navList flex-direction es   columna
window.addEventListener("resize",()=>{ 
    direccionNavList=styleNavList.getPropertyValue("flex-direction")
    visibilityContenedorNavList=styleContenedorNavList.getPropertyValue("visibility");

   /* console.log("el valor de flex direction es: " + direccionNavList);*/
   //Línea de codigo utilizada para confirmar la salida que arroja la función 
if(innerWidth>770) {
   botonCerrar.classList.remove("visible"); 
}

if(innerWidth<770 && direccionNavList =='column' && visibilityContenedorNavList=="visible" ) {
    
    botonCerrar.classList.add("visible"); 
 }

});
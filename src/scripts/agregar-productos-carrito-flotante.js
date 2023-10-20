/* //Variables
const carritoFlotante = document.querySelector('#carrito-flotante'); //todo el contenedor del carrito 
const listaProductos = document.querySelector('#'); //Agrega el id de la lista de los productos
const contenedorCarritoFlotante = document.querySelector('#lista-carrito-flotante'); //agrega id para lista de carrito 
const eliminarProducto = document.querySelector('.btn-close"'); //Boton de eliminar producto */
carrito=[];
cargarCarrito();
// agregarObraCarrito();
agregarCarritoFlotante();

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      // Si hay datos en el localStorage, analízalos y actualiza el arreglo carrito
      carrito.push(...JSON.parse(carritoGuardado));
    }
  }

 // obra_id:
/* function agregarObraCarrito(){
    const imagen= document.querySelector('#imagen');
    console.log(imagen.textContent);
    imagen.src = carrito[0].imagen;

    const titulo = document.querySelector('#titulo');
    console.log(titulo.textContent);
    titulo.textContent = carrito[0].titulo;
    console.log(titulo.textContent);   

    const artista = document.querySelector('#artista');
    console.log(artista.textContent);
    artista.textContent = carrito[0].artista;
    console.log(artista.textContent);   

    const descripcion = document.querySelector('#descripcion');
    console.log(descripcion.textContent);
    descripcion.textContent = carrito[0].descripcion;
    console.log(descripcion.textContent);    

    const dimensiones = document.querySelector('#dimensiones');
    console.log(dimensiones.textContent);
    dimensiones.textContent = 'Largo ' + carrito[0].largo + ' x Ancho ' + carrito[0].ancho;
    console.log(dimensiones.textContent);  
    
    const precio = document.querySelector('#precio');
    console.log(precio.textContent);
    precio.textContent = '$ ' + carrito[0].precio;
    console.log(precio.textContent);  

} */
function agregarCarritoFlotante(){
    for(let i =0; i<carrito.length;i++){
        carrito[i]["obra_id"]=i;
    const obra = document.createElement('div');
    obra.id="lista-carrito-flotante";
    obra.className=""
    obra.innerHTML =
    `<hr data-idObra="${carrito[i].obra_id}">
    <div id="lista-carrito-flotante" class="row" class="col-sm-12 col-md-4 col-lg-4"> <!--se agrega id para js-->
       <!--Columna 1    Imagen de producto-->
       <div class="col-sm-3 col-md-4 col-lg-4 imagen-producto-carrito-flotante"> 
           <img src="${carrito[i].imagen}" class="card-img-top" alt="imagen 1" >
       </div><!--cierre imagen-->
       <!--Columna 2-->
       <div class="col-sm-7 col-md-8 col-lg-8 ">
           <div class="card-body">
                <!--Columna 2.1-->
                <div class="col cerrar">
                    <!--Columna 2.1.1   Nombre del producto-->
                    <div class="col-sm-11 col-md-9 col-lg-11">
                        <h5 class="card-title">${carrito[i].titulo}</h5>
                    </div>
                    <!--Columna 2.1.2   Boton eliminar producto-->
                    <div class="col-sm-1 col-md-3 col-lg-1">
                        <a href="#">
                            <button type="button" id="${carrito[i]}" class="btn-close" aria-label="Close"></button>
                        </a>
                    </div>
                </div>
               <h6 class="nombre-artista">${carrito[i].artista}</h6>
               <br>
               <!--Tamano del producto-->
                <p class="centrado tamano-obra">Largo ${carrito[i].largo} x Ancho ${carrito[i].ancho}</p> 
                <br>
                <!--Columna 2.2-->
                <div class="row">
                    <!--Columna 2.2.2   Precio de la pieza-->
                    <div class="col-11" >
                        <p class="precio"> ${carrito[i].precio}</p> 
                    </div>
                </div>
            </div>
        </div><!--cierre columna info-->
    </div> <!--cierre fila-->
    `;
    const carritoFlotante = document.querySelector('#fila-carrito-flotante');
    carritoFlotante.insertBefore(obra,carritoFlotante[i]);
    }

}

let subTotalCarrito=[];
let subTotal = 0;

//Suma de productos
calcularSubTotal();
function calcularSubTotal (){
    
    for(let i =0; i<carrito.length;i++){
        subTotal += carrito[i].precio;
    }
    console.log (subTotal);

    const totalFooter = document.querySelector('.total-footer');
    totalFooter.textContent = '$ '+subTotal + '.00';
}

//Eliminacion del producto
const eliminarProducto = document.querySelectorAll('.btn-close');
eliminarProducto.forEach(element => {
    
    element.addEventListener('click', e =>{ 
        //Remover todo mi contenedor 
        let contenedorCarrito = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement; 
        contenedorCarrito.remove();
        //
        let precio = contenedorCarrito.querySelector('.precio');
        console.log(precio.textContent);
        const totalFooter = document.querySelector('.total-footer');
        subTotal=subTotal-parseInt(precio.textContent);
        totalFooter.textContent = '$ '+subTotal + '.00';
        //eliminar solo una fila 
        let getId = contenedorCarrito.querySelector('[data-idObra]');
        //console.log(getId.dataset.idobra);
       // console.log(getId);
        //carrito=[];
        console.log(carrito);
        let nuevoCarrito = [];
        carrito.forEach(element => {
            if (element.obra_id!= getId.dataset.idobra) {
                nuevoCarrito.push(element);
            }
        });
        console.log (nuevoCarrito);
        //se resetea el locar estorage, con los carritos eliminados 
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        
    })

});



/* function eliminarCurso(e.target.classList){
    console.log ('desde eiminar curso');

} */

/*   Idea de eliminacion de articulo
// Agregar un manejador de eventos al botón
botonCarrito.addEventListener('click', function() {
    agregarAlCarrito(productoSeleccionado);
  }); */



/* cargarEventListeners()//Llamo la funcion
function cargarEventListeners(){
    //Cuando agregas un producto presionando "Agregar al carrito"
    listaProductos.addEventListener('click', agregarProducto);
}


//Funciones
function agregarProducto(){
    console.log('presionarndo en cursos');//verificando que funcione
} */
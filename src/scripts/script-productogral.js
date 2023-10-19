const buttons = document.querySelectorAll('.circular-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('selected')) {
      // Si el botón ya está seleccionado, desactívalo
      button.classList.remove('selected');
    } else {
      // Si el botón no está seleccionado, desactiva todas las clases 'selected' en todos los botones
      buttons.forEach((btn) => {
        btn.classList.remove('selected');
      });

      // Luego, activa la clase 'selected' solo en el botón actual
      button.classList.add('selected');
    }
  });
});


// Función para mostrar la ventana modal con la imagen grande
function mostrarImagen(elemento) {
  const ventanaModal = document.getElementById('ventanaModal');
  const modalContenido = document.querySelector('.modal-contenido');
  modalContenido.src = elemento.src;
  ventanaModal.style.display = 'block';
}

// Función para cerrar la ventana modal
function cerrarModal() {
  const ventanaModal = document.getElementById('ventanaModal');
  ventanaModal.style.display = 'none';
}


// Función para realizar la compra
function hacerCompra() {
    if (selectedSize !== null) {
        // Aquí puedes realizar la acción de compra con el tamaño seleccionado
        alert(`Compra realizada para el tamaño ${selectedSize}`);
    } else {
        alert('Por favor, selecciona un tamaño antes de comprar.');
    }
}
// Obtén referencias a los botones de tamaño y al botón de compra
const myButton = document.getElementById('myButton');
const myButton1 = document.getElementById('myButton1');
const myButton2 = document.getElementById('myButton2');
const btnCompra = document.getElementById('btncompra');

// Variable para almacenar el tamaño seleccionado
let selectedSize = null;

// Función para seleccionar un tamaño
function seleccionarTamanio(tamanio) {
    selectedSize = tamanio;
    
    // Habilita el botón de compra si se selecciona un tamaño
    if (selectedSize !== null) {
        btnCompra.removeAttribute('disabled');
    } else {
        btnCompra.setAttribute('disabled', 'disabled');
    }
}










        // Obtén referencias a los elementos del DOM
        const subtractButton = document.getElementById('subtractButton');
        const addButton = document.getElementById('addButton');
        const quantityElement = document.getElementById('quantity');
        const buyButton = document.getElementById('btncompra');

        // Inicializa la cantidad de productos
        let quantity = 0;

        // Inicializa la lista de productos
        const productList = [];

        // Función para actualizar la cantidad y el campo de cantidad
        function updateQuantity(newQuantity) {
            quantity = newQuantity;
            quantityElement.textContent = quantity;
        }

        

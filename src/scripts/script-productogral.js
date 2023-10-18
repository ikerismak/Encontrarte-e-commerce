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

// Agrega eventos onclick a los botones de tamaño
myButton.onclick = function() {
    seleccionarTamanio("35x35");
};

myButton1.onclick = function() {
    seleccionarTamanio("75x75");
};

myButton2.onclick = function() {
    seleccionarTamanio("85x85");
};









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

        // Manejadores de eventos para los botones de suma y resta
        subtractButton.addEventListener('click', () => {
            if (quantity > 0) {
                updateQuantity(quantity - 1);
            }
        });

        addButton.addEventListener('click', () => {
            updateQuantity(quantity + 1);
        });

        // Manejador de eventos para el botón "Comprar ahora"
        buyButton.addEventListener('click', () => {
          if (quantity > 0 && selectedSize !== null) {
              // Verifica si el producto ya existe en la lista
              const existingProduct = productList.find(product => product.tamanio === selectedSize);
              
              if (existingProduct) {
                  // Si el producto ya existe, agrega la cantidad seleccionada
                  existingProduct.cantidad += quantity;
              } else {
                  // Si el producto no existe, crea uno nuevo y agrégalo a la lista
                  const product = {
                      nombre: "Ecos de la eternidad", // Nombre de la obra de arte
                      cantidad: quantity,
                      autor: "Isabela Montoya",
                      tamanio: selectedSize,
                      precio:"$850" // Agrega el tamaño seleccionado al objeto del producto
                  };
                  productList.push(product);
              }
      
              // Limpia la cantidad y el tamaño seleccionado
              updateQuantity(0);
              selectedSize = null;
      
              // Puedes hacer algo con la lista de productos, como mostrarla en la página o enviarla a un servidor
              console.log(productList);
          }
      });
    





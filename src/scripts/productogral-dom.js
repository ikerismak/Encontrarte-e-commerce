const Obra = [
  {
    user_id: 1,
    artista: "Pepe",
    unidades_disponibles: 1,
    dimension_largo: "300",
    dimension_ancho: "400",
    titulo: "La noche estrellada",
    tecnica: "Acuarela",
    categoria: "Pinturas",
    certificacion: "0890453453432",
    precio: 1000,
    imagen_normal: "../assets/list-products-images/mirada_del_alma.png",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/pexels-steve-johnson-1585325.jpg",
    imagen_cuatro: "/assets",
    descripcion: "Una hermosa representación de una noche estrellada en un estilo impresionista. Los colores vívidos y el juego de luz hacen de esta pintura una adición perfecta a cualquier colección de arte."
  },
  {
    user_id: 2,
    artista: "María",
    unidades_disponibles: 3,
    dimension_largo: "500",
    dimension_ancho: "600",
    titulo: "El jardín secreto",
    tecnica: "Óleo",
    categoria: "Pinturas",
    certificacion: "0987654321",
    precio: 1200,
    imagen_normal: "../assets/list-products-images/mar_y_plantas.png",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/pexels-thirdman-6732554.jpg",
    imagen_cuatro: "/assets",
    descripcion: "Una obra maestra de la naturaleza que representa un jardín secreto. La atención al detalle en esta pintura es impresionante, y los colores cálidos y exuberantes te transportarán a un mundo de belleza y misterio."
  },
  {
    user_id: 3,
    artista: "Juan",
    unidades_disponibles: 2,
    dimension_largo: "400",
    dimension_ancho: "300",
    titulo: "Retrato de la dama",
    tecnica: "Acuarela",
    categoria: "Pinturas",
    certificacion: "1234567890",
    precio: 800,
    imagen_normal: "../assets/list-products-images/explosion_colorida.png",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/escrito_de_un_loco.png",
    imagen_cuatro: "/assets",
    descripcion: "Una pintura elegante y refinada que captura la belleza y la gracia de una dama en un estilo clásico de acuarela."
  },
  {
    user_id: 4,
    artista: "Carlos",
    unidades_disponibles: 5,
    dimension_largo: "200",
    dimension_ancho: "250",
    titulo: "Paisaje de montaña",
    tecnica: "Acrílico",
    categoria: "Pinturas",
    certificacion: "9876543210",
    precio: 600,
    imagen_normal: "../assets/list-products-images/eyes_pictures.jpg",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "/assets/artist.webp",
    imagen_cuatro: "/assets",
    descripcion: "Una vista impresionante de las majestuosas montañas cubiertas de nieve. Los colores y la textura en esta pintura al óleo te transportarán a la tranquilidad de la naturaleza."
  },
  {
    user_id: 5,
    artista: "Luisa",
    unidades_disponibles: 2,
    dimension_largo: "350",
    dimension_ancho: "450",
    titulo: "Naturaleza en primavera",
    tecnica: "Óleo",
    categoria: "Pinturas",
    certificacion: "5678901234",
    precio: 950,
    imagen_normal: "../assets/list-products-images/mancha_plastica.jpg",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "/assets/artist.webp",
    imagen_cuatro: "/assets",
    descripcion: "Colores vibrantes de la primavera en todo su esplendor. Esta pintura al óleo capta la frescura y la vitalidad de la naturaleza durante la estación más hermosa del año."
  },
  {
    user_id: 6,
    artista: "Elena",
    unidades_disponibles: 1,
    dimension_largo: "280",
    dimension_ancho: "380",
    titulo: "Abstracción en rojo",
    tecnica: "Pintura al óleo",
    categoria: "Pinturas",
    certificacion: "2345678901",
    precio: 750,
    imagen_normal: "../assets/list-products-images/impacto_colorido.jpg",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/conexion.jpg",
    imagen_cuatro: "/assets",
    descripcion: "Una pieza abstracta en tonos rojos y vibrantes que despierta emociones y desafía la percepción. Los intrincados detalles y las texturas hacen que esta pintura sea única."
  },
  {
    user_id: 7,
    artista: "Roberto",
    unidades_disponibles: 4,
    dimension_largo: "320",
    dimension_ancho: "420",
    titulo: "Retrato de la mujer sonriente",
    tecnica: "Óleo sobre lienzo",
    categoria: "Pinturas",
    certificacion: "6789012345",
    precio: 1100,
    imagen_normal: "../assets/list-products-images/mural_oso.jpg",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/conexion.jpg",
    imagen_cuatro: "/assets",
    descripcion: "Una impresionante representación de una mujer sonriente. La técnica de óleo sobre lienzo añade profundidad y realismo a esta obra, y la sonrisa de la modelo ilumina la pintura."
  },
  {
    user_id: 8,
    artista: "Isabel",
    unidades_disponibles: 3,
    dimension_largo: "350",
    dimension_ancho: "450",
    titulo: "Bodegón de frutas",
    tecnica: "Acuarela sobre papel",
    categoria: "Pinturas",
    certificacion: "0123456789",
    precio: 900,
    imagen_normal: "../assets/list-products-images/fruteros_abstracto.jpg",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/conexion.jpg",
    imagen_cuatro: "/assets",
    descripcion: "Una representación detallada y vívida de frutas frescas dispuestas en un bodegón. Los colores y las sombras en esta acuarela son sorprendentemente realistas."
  },
  {
    user_id: 9,
    artista: "Andrés",
    unidades_disponibles: 6,
    dimension_largo: "300",
    dimension_ancho: "400",
    titulo: "Puesta de sol en el mar",
    tecnica: "Acrílico sobre lienzo",
    categoria: "Pinturas",
    certificacion: "3456789012",
    precio: 1300,
    imagen_normal: "list-products-images/escrito_de_un_loco.png",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "/assets/artist.webp",
    imagen_cuatro: "/assets",
    descripcion: "Una impresionante vista de la puesta de sol sobre el océano. Los colores cálidos y el juego de luz en esta pintura de acrílico capturan la belleza y la serenidad del atardecer en el mar."
  },
  {
    user_id: 10,
    artista: "Marta",
    unidades_disponibles: 2,
    dimension_largo: "280",
    dimension_ancho: "380",
    titulo: "Figuras en movimiento",
    tecnica: "Pintura al óleo",
    categoria: "Pinturas",
    certificacion: "4567890123",
    precio: 850,
    imagen_normal: "../assets/list-products-images/explosion_colorida.png",
    imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
    imagen_tres: "../assets/list-products-images/manchas_opticas.png",
    imagen_cuatro: "/assets",
    descripcion: "Una representación dinámica y expresiva de figuras en movimiento. El uso magistral de la técnica de óleo crea una sensación de movimiento y energía en esta obra."
  }
];

// El resto del arreglo se mantiene igual



/////////////imagenes del contendor principal/////////////////////////////////////////////////////////
// Define una función para agregar objetos a contenedores
function agregarObjetosAContenedores(arr, contenedores) {
  let contenedorActual = 0; // Inicializa el contenedor actual
  let objetosPorContenedor = 3; // Número máximo de objetos por contenedor

  arr.forEach((element, index) => {
    // Crea un nuevo elemento HTML (por ejemplo, un div)
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '15rem';
    card.dataset.user_id = String(element.user_id); // Cambia 'id' a 'user_id' para que coincida con la URL
    card.innerHTML = `
                      <img class="imagenrelacionada" src="../assets/${element.imagen_normal}" width="200px" height="200px" alt="...">
                      <p class="card-text">"${element.titulo}"</p>
                  </div>
      `;

    // Agrega el elemento al contenedor actual
    contenedores[contenedorActual].appendChild(card);

    // Agrega un manejador de eventos de clic a la tarjeta
    card.addEventListener('click', () => {
      // Obtiene el identificador único cuando se hace clic en la tarjeta
      const user_id = card.dataset.user_id; // Cambia 'id' a 'user_id'

      // Redirige a la página independiente y pasa el identificador como parámetro en la URL
      window.location.href = `Pagina del producto.html?user_id=${user_id}`; // Cambia 'id' a 'user_id'
    });

    // Verifica si el contenedor actual ha alcanzado su capacidad
    if (contenedorActual < contenedores.length - 1 && (index + 1) % objetosPorContenedor === 0) {
      // Cambia al siguiente contenedor
      contenedorActual++;
    }
  });
}

// Obtén los contenedores
const carruselContenedor1 = document.querySelector('.image-with-text1');
const carruselContenedor2 = document.querySelector('.image-with-text2');
const carruselContenedor3 = document.querySelector('.image-with-text3');
const carruselContenedor4 = document.querySelector('.image-with-text4');

// array con los contenedores
const contenedores = [carruselContenedor1, carruselContenedor2, carruselContenedor3, carruselContenedor4];

// Llama a la función con tu arreglo de objetos y los contenedores
agregarObjetosAContenedores(Obra, contenedores);


///////////////////////////////////////////////////valores de user id////////////////////

// Obtén el valor del parámetro 'user_id' de la URL
const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get('user_id');


// Encuentra el producto correspondiente según 'user_id'/////////////////////////////////////////////////
const productoSeleccionado = Obra.find(producto => producto.user_id === parseInt(user_id));

if (productoSeleccionado) {
  // Actualiza el título en la página con el título del producto seleccionado
  document.getElementById('tituloobra').textContent = productoSeleccionado.titulo;
  document.getElementById('descripciobr').textContent = productoSeleccionado.descripcion;
  document.getElementById('descripcionobra').textContent = productoSeleccionado.descripcion;
  document.getElementById('precio').querySelector('span').textContent = `$${productoSeleccionado.precio}`;
  // Obtén las imágenes del carrusel por su ID y establece la fuente (src) de cada una
  document.getElementById('imprpal').src = productoSeleccionado.imagen_normal;
  document.getElementById('imprpal1').src = productoSeleccionado.imagen_dos;
  document.getElementById('imprpal2').src = productoSeleccionado.imagen_tres;
  document.getElementById('imagenmini').src = productoSeleccionado.imagen_normal;

  // Agregar a la lista de técnicas
  const listaTecnicas = document.getElementById('listaTecnicas');

  // Crear elementos li para "técnica" y "categoría"
  const tecnicaLi = document.createElement('li');
  const categoriaLi = document.createElement('li');

  // Establecer el contenido de los elementos li
  tecnicaLi.textContent = "Técnica: " + productoSeleccionado.tecnica;
  categoriaLi.textContent = "Categoría: " + productoSeleccionado.categoria;

  // Agregar los elementos li a la lista ul
  listaTecnicas.appendChild(tecnicaLi);
  listaTecnicas.appendChild(categoriaLi);

  // Agregar a la lista de obra
  const listaobra = document.getElementById('listaobra');

  // Crear elementos li para "técnica" y "categoría"
  const tecnicaLi1 = document.createElement('li');
  const categoriaLi1 = document.createElement('li');

  // Establecer el contenido de los elementos li
  tecnicaLi1.textContent = "Técnica: " + productoSeleccionado.tecnica;
  categoriaLi1.textContent = "Categoría: " + productoSeleccionado.categoria;

  // Agregar los elementos li a la lista ul
  listaobra.appendChild(tecnicaLi1);
  listaobra.appendChild(categoriaLi1);
} else {
  // Obtén el arreglo de obras desde el Local Storage
const obrasJSON = localStorage.getItem('obras');
const obras = JSON.parse(obrasJSON);
console.log(obras,[0])

// Verifica si se han obtenido las obras correctamente
if (obras && obras.length > 0) {
  // Itera sobre las obras y actualiza los elementos 
  obras.forEach((obra, index) => {
    // Actualiza el título en la página con el título de la obra seleccionada
    document.getElementById('tituloobra').textContent = obra.titulo;
    
    // Actualiza la descripción en la página con la descripción de la obra
    document.getElementById('descripciobr').textContent = obra.descripcion;
    
    // Actualiza el precio en la página
    document.getElementById('precio').querySelector('span').textContent = `$${obra.precio}`;

    // Obtén las imágenes del carrusel por su ID y establece la fuente (src) de cada una
    document.getElementById('imprpal').src = `../assets/list-products-images/${obra.imagen}`;

     // Obtén las imágenes del carrusel por su ID y establece la fuente (src) de cada una
     document.getElementById('imagenmini').src = `../assets/list-products-images/${obra.imagen}`;
 

  });
} else {
  console.log('No se encontraron obras en el Local Storage');
}
}
carrito = []

let contadorCarrito = 0;

// Definir una función para cargar el carrito desde el localStorage
function cargarCarrito() {
const carritoGuardado = localStorage.getItem('carrito');
if (carritoGuardado) {
// Si hay datos en el localStorage, analízalos y actualiza el arreglo carrito
carrito.push(...JSON.parse(carritoGuardado));
}
}
// Llama a la función para cargar el carrito cuando la página se carga
cargarCarrito();


// Función para cargar el carrito desde el localStorage
function cargarCarrito() {
const carritoEnLocalStorage = localStorage.getItem('carrito');
if (carritoEnLocalStorage) {
carrito = JSON.parse(carritoEnLocalStorage);
}
}
// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
const productoEnCarrito = {
titulo: productoSeleccionado.titulo,
artista: productoSeleccionado.artista,
descripcion: productoSeleccionado.descripcion,
precio: productoSeleccionado.precio,
imagen: productoSeleccionado.imagen_normal,
largo: productoSeleccionado.dimension_largo,
ancho: productoSeleccionado.dimension_ancho
};

const obraEnCarrito = {
  titulo: productoSeleccionado.titulo,
}


carrito.push(productoEnCarrito);


localStorage.setItem('carrito', JSON.stringify(carrito));


alert(`"${productoSeleccionado.titulo}" se ha agregado al carrito`);





// Luego, puedes realizar otras acciones, como actualizar la cantidad de productos en el carrito en la interfaz de usuario, si es necesario.
}


// Obtén el botón "Agregar al Carrito" por su ID
const botonCarrito = document.getElementById('agregarAlCarrito');


// Agregar un manejador de eventos al botón
botonCarrito.addEventListener('click', function () {
console.log("carrito");
if (contadorCarrito == 0) {
agregarAlCarrito(productoSeleccionado);
contadorCarrito++;
}
else {
alert("solo se puede agregar un producto agregar al carrito");
}


});


const botonCarrito2 = document.getElementById('agregarAlCarrito2');


// Agregar un manejador de eventos al segundo botón
botonCarrito2.addEventListener('click', function () {
if (contadorCarrito == 0) {
agregarAlCarrito(productoSeleccionado);
}
else {
alert("solo se puede agregar un producto agregar al carrito");
}
});




////////////////producto de almacenamiento local////////////////////////////


















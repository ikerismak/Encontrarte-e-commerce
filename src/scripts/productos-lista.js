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
        imagen_normal: "../assets/list-products-images/mar_y_plantas.png",
        imagen_dos: "../assets/list-products-images/explosion_colorida.png",
        imagen_tres: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_cuatro: "../assets/list-products-images/escrito_de_un_loco.png",
        descripcion: "Un cuadro muy bonito",
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
        imagen_normal: "ImgnavBar&acercaDeNosotros/image 20 (1).png",
        imagen_dos:"../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una obra maestra de la naturaleza",
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
        imagen_normal: "ImgnavBar&acercaDeNosotros/Imagenvioleta.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una pintura elegante y refinada",
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
        imagen_normal: "ImgnavBar&acercaDeNosotros/Imagenvioleta.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una vista impresionante de las montañas",
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
        imagen_normal: "list-products-images/mirada_del_alma.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Colores vibrantes de la primavera en todo su esplendor",
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
        imagen_normal: "list-products-images/mar_y_plantas.png",
        imagen_dos:"../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una pieza abstracta en tonos rojos y vibrantes",
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
        imagen_normal: "list-products-images/manchas_opticas.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una impresionante representación de una sonrisa radiante",
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
        imagen_normal: "list-products-images/manchas_opticas.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una representación detallada y vívida de frutas frescas",
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
        descripcion: "Una impresionante vista de la puesta de sol sobre el océano",
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
        imagen_normal: "list-products-images/mirada_al_pasado.png",
        imagen_dos: "../assets/list-products-images/mirada_al_pasado.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una representación dinámica y expresiva de figuras en movimiento",
      },
];

const listaElementos = document.querySelectorAll('#listaobjetos li strong');

listaElementos.forEach(elemento => {
  elemento.addEventListener('click', () => {
    const categoria = elemento.textContent.trim();
    redirigirAPagina(categoria);
  });
});

function redirigirAPagina(categoria) {
  // Reemplaza espacios en blanco y caracteres especiales en el nombre de la categoría
  const categoriaSinEspacios = categoria.replace(/\s/g, '_').toLowerCase();

  // Redirige a la página con el nombre de la categoría como parte de la URL
  window.location.href = `${categoriaSinEspacios}.html`;
}

////////////////mandar a pagina principal///////////////////////
const pinturasAlOleoElement = document.getElementById('pinturasAlOleo');

pinturasAlOleoElement.addEventListener('click', () => {
  // Redirige a la página HTML deseada al hacer clic en "Pinturas al Oleo"
  window.location.href = 'pagina-lista-productos.html';
});
// Selecciona todos los elementos de la lista en el menú desplegable
const listaDesplegableElements = document.querySelectorAll('#ventanaflotante .dropdown-item');

// Agrega el evento de clic a cada elemento de la lista
listaDesplegableElements.forEach(elemento => {
  elemento.addEventListener('click', () => {
    const categoria = elemento.textContent.trim();
    redirigirAPagina(categoria);
  });
});

const pintOleoElement = document.getElementById('pintOleo');

pintOleoElement.addEventListener('click', () => {
  // Aquí puedes especificar la URL a la que deseas redirigir al hacer clic en "Pinturas al Oleo"
  window.location.href = 'pagina-lista-productos.html';
});




//categoria///////////////////////////////
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
    <img class="card-img" src="../assets/${element.imagen_normal}" alt="...">
    <div class="card-body">
        <h5 class="card-title">${element.titulo}</h5>
    </div>
`;

// Agrega un manejador de eventos de clic a la tarjeta
card.addEventListener('click', () => {
    // Obtiene el identificador único cuando se hace clic en la tarjeta
    const user_id = card.dataset.user_id; // Cambia 'id' a 'user_id'

    // Redirige a la página independiente y pasa el identificador como parámetro en la URL
    window.location.href = `Pagina del producto.html?user_id=${user_id}`; // Cambia 'id' a 'user_id'
});

// ...


      // Agrega el elemento al contenedor actual
      contenedores[contenedorActual].appendChild(card);

      // Verifica si el contenedor actual ha alcanzado su capacidad
      if (contenedorActual < contenedores.length - 1 && (index + 1) % objetosPorContenedor === 0) {
          // Cambia al siguiente contenedor
          contenedorActual++;
      }
  });
}

// Obtén los contenedores
const carruselContenedor1 = document.querySelector('.contenedorcardsc11');
const carruselContenedor2 = document.querySelector('.contenedorcardsc12');
const carruselContenedor3 = document.querySelector('.contenedorcardsc13');
const carruselContenedor4 = document.querySelector('.contenedorcardsc14');

// array con los contenedores
const contenedores = [carruselContenedor1, carruselContenedor2, carruselContenedor3, carruselContenedor4];

// Llama a la función con tu arreglo de objetos y los contenedores
agregarObjetosAContenedores(Obra, contenedores);

// Obtén los contenedores para el segundo conjunto
const carruselContenedor5 = document.querySelector('.contenedorcardsc15');
const carruselContenedor6 = document.querySelector('.contenedorcardsc16');
const carruselContenedor7 = document.querySelector('.contenedorcardsc17');
const carruselContenedor8 = document.querySelector('.contenedorcardsc18');

// Array con los contenedores para el segundo conjunto
const contenedores2 = [carruselContenedor5, carruselContenedor6, carruselContenedor7, carruselContenedor8];

// Llama a la función con tu arreglo de objetos y los contenedores del segundo conjunto
agregarObjetosAContenedores(Obra, contenedores2);

// Obtén los contenedores para el segundo conjunto
const carruselContenedor9 = document.querySelector('.contenedorcardsc19');
const carruselContenedor10 = document.querySelector('.contenedorcardsc20');
const carruselContenedor11 = document.querySelector('.contenedorcardsc21');
const carruselContenedor12 = document.querySelector('.contenedorcardsc22');

// Array con los contenedores para el segundo conjunto
const contenedores3 = [carruselContenedor9, carruselContenedor10, carruselContenedor11, carruselContenedor12];

// Llama a la función con tu arreglo de objetos y los contenedores del segundo conjunto
agregarObjetosAContenedores(Obra, contenedores3);




///////////////////////////////////////////se agregan tarjetas desde el local storage//////////////////////////

// Obtén el contenido actual del cuarto contenedor desde el localStorage
const cuartoContenedorJSON = localStorage.getItem('cuartoContenedor');
let cuartoContenedor = [];

if (cuartoContenedorJSON) {
  cuartoContenedor = JSON.parse(cuartoContenedorJSON);
}

// Obtén el producto del localStorage (por ejemplo, el primer elemento del array)
// Obtén el producto del localStorage
const productosJSON = localStorage.getItem('obras');
const productos = JSON.parse(productosJSON);

if (productos && productos.length > 0) {
  // Obtén el contenedor HTML
  const contenedor = document.querySelector('.contenedorcardsc14');

  // Recorre todos los productos y agrégalos al contenedor
  productos.forEach((producto) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '15rem';
    card.dataset.user_id = String(producto.user_id);
    card.innerHTML = `
    
      <img class="card-img" src="../assets/list-products-images/${producto.imagen}" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.titulo}</h5>
      </div>
    `;
    // Agrega un manejador de eventos de clic a la tarjeta
card.addEventListener('click', () => {
  // Obtiene el identificador único cuando se hace clic en la tarjeta
  const user_id = card.dataset.user_id; // Cambia 'id' a 'user_id'

  // Redirige a la página independiente y pasa el identificador como parámetro en la URL
  window.location.href = `Pagina del producto.html?user_id=${user_id}`; // Cambia 'id' a 'user_id'
});
    
    // Agrega el elemento al contenedor
    contenedor.appendChild(card);
  });
} else {
  // Maneja el caso en el que el array de productos esté vacío o no exista
  console.log('No hay productos en el localStorage');
}


































/*
// Para el primer carrusel
const carruselContainer1 = document.querySelector('#carouselExampleIndicators .carousel-inner');

const contenedorcardsRecomendados = document.querySelector('.contenedorcards-recomendados')

// Para el segundo carrusel
const carruselContainer2 = document.querySelector('#carouselExampleIndicators1 .carousel-inner');

// Para el tercer carrusel
const carruselContainer3 = document.querySelector('#carouselExampleIndicators2 .carousel-inner');

// Define la cantidad de obras por diapositiva (pueden ser diferentes para cada carrusel si lo deseas)
const obrasPorDiapositiva = 3;

Obra.forEach(card => {
  let cardcontainer = document.createElement("div")
  cardcontainer.classList.add("card")
  cardcontainer.style.width = "15rem"
  let carta = 
  `
    <img class="imagentarjeta" src=${card.imagen_normal} class="card-img-top" alt="...">
      <div class="card-body">
       <p class="card-text">${card.titulo}</p>
      </div>
  `
  console.log(card.titulo)
  console.log(card.imagen_normal)
  cardcontainer.innerHTML = carta
  contenedorcardsRecomendados.appendChild(cardcontainer)
  console.log(carta)
})
*/



























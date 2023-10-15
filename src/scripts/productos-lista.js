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
        imagen_normal: "ImgnavBar&acercaDeNosotros/image 19.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
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
        imagen_dos:"../assets/list-products-images/image 14.png",
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
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/8.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 10.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 11.png",
        imagen_dos:"../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 12.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 12.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 13.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
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
        imagen_normal: "list-products-images/image 14.png",
        imagen_dos: "../assets/list-products-images/image 14.png",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una representación dinámica y expresiva de figuras en movimiento",
      },
];


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
      card.innerHTML = `
          <img class="card-img" src="../assets/${element.imagen_normal}" alt="...">
          <div class="card-body">
              <h5 class="card-title">${element.titulo}</h5>
          </div>
      `;

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



























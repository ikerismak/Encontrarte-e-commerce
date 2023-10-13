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
        imagen_dos: "",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
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
        imagen_dos: "/assets/artist-02.webp",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una representación dinámica y expresiva de figuras en movimiento",
      },
];

// Para el primer carrusel
const carruselContainer1 = document.querySelector('#carouselExampleIndicators .carousel-inner');

// Para el segundo carrusel
const carruselContainer2 = document.querySelector('#carouselExampleIndicators1 .carousel-inner');

// Para el tercer carrusel
const carruselContainer3 = document.querySelector('#carouselExampleIndicators2 .carousel-inner');

// Define la cantidad de obras por diapositiva (pueden ser diferentes para cada carrusel si lo deseas)
const obrasPorDiapositiva = 3;

// Función para generar diapositivas dinámicamente
function generarDiapositivas(carruselContainer, Obra) {
  for (let i = 0; i < Obra.length; i += obrasPorDiapositiva) {
    const diapositiva = document.createElement('div');
    diapositiva.classList.add('carousel-item');

    const grupoObras = Obra.slice(i, i + obrasPorDiapositiva);

    // Configura el contenido de la diapositiva.
    const contenidoDiapositiva = `
      <div class="contenedorcards">
        ${grupoObras.map(element => `
          <div class="card" style="width: 15rem;">
            <img class="imagentarjeta" src="../assets/${element.imagen_normal}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${element.titulo}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    diapositiva.innerHTML = contenidoDiapositiva;
    carruselContainer.appendChild(diapositiva);
  }
}

// Llama a la función para generar las diapositivas en cada carrusel
generarDiapositivas(carruselContainer1, Obra); // Reemplaza Obra1 con tus datos
generarDiapositivas(carruselContainer2, Obra); // Reemplaza Obra2 con tus datos
generarDiapositivas(carruselContainer3, Obra); // Reemplaza Obra3 con tus datos

// Establece la primera diapositiva como activa para cada carrusel
const primerDiapositiva1 = carruselContainer1.querySelector('.carousel-item');
primerDiapositiva1.classList.add('active');

const primerDiapositiva2 = carruselContainer2.querySelector('.carousel-item');
primerDiapositiva2.classList.add('active');

const primerDiapositiva3 = carruselContainer3.querySelector('.carousel-item');
primerDiapositiva3.classList.add('active'); 

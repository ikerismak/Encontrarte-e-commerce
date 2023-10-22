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
        imagen_normal: "../assets/ImgnavBar&acercaDeNosotros/obrarosa.png",
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
        imagen_normal: "list-products-images/mar_y_plantas.png",
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
        imagen_normal: "list-products-images/manchas_opticas.png",
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
        imagen_normal: "list-products-images/explosion_colorida.png",
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
        imagen_normal: "list-products-images/escrito_de_un_loco.png",
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
        imagen_normal: "list-products-images/mirada_del_alma.png",
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
        imagen_normal: "list-products-images/mirada_al_pasado.png",
        imagen_dos: "/assets/artist-02.webp",
        imagen_tres: "/assets/artist.webp",
        imagen_cuatro: "/assets",
        descripcion: "Una representación dinámica y expresiva de figuras en movimiento",
      },
];

const artistasValoresConsulta= [
  {
    id_artista:1,
    nombre_completo:'John Doe' ,
    tecnicas:'Óleo',
    categorias:'Retrato',
    descripcion:'artista del óleo, me enamoré del arte desde niño. Mis primeros trazos fueron un portal a un mundo de colores y emociones. Cada pincelada narra mi historia de amor por el arte. Descúbrelo en línea."'
  },
  {
    id_artista:2,
    nombre_completo:'Alice Johnson' ,
    tecnicas:'Digital',
    categorias:'Arte abstracto',
    descripcion:'Soy un artista digital que desde pequeña gustaba del dibujo y la pintura, cuando conocí que mis diseños podían vivir en el mundo digital por la eternidad decídi incursionar con obras y diseños únicos con un estilo abstracto que me encanta'
  },
  {
    id_artista:3,
    nombre_completo:'Michael Smith' ,
    tecnicas:'Acrílico',
    categorias:'Realismo',
    descripcion:'¡Hola, soy Michael Smith! Me apasiona el realismo y el acrílico. Descubre la magia en los detalles conmigo.'
  },
  {
    id_artista:4,
    nombre_completo:'Emily Brown',
    tecnicas:'Pasteles',
    categorias:'Hiperrealismo',
    descripcion: 'soy un artista que le encanta el matiz y la emoción que me dan los dibujos con hiperrealismo en tonos pasteles, conoce mi arte a continuación'

  },
  {
    id_artista:5,
    nombre_completo:'Daniel Wilson',
    tecnicas:'Tinta china',
    categorias:'Arte abstracto',
    descripcion: 'Me encanta la tinta china y el arte abstracto pues me permite plasmar conceptos más complejos en mi arte'

  },
  
];




const row = document.querySelector(".row")

Obra.forEach(element => {

    let container = document.createElement("div");
    container.classList.add("card", "col-lg-3", "col-md-4", "col-sm-12", "cuadroObra");
    container.setAttribute("style","padding: 15px; border: none; border-radius:0px")
    // style="padding: 0px; border: none; border-radius:0px"

    let contenido =  
     `
         <!-- <div class="contenedorObra"> -->
         <a href="../pages/Pagina del producto.html">
        <img src="../assets/${element.imagen_normal}" class="card-img-top" alt="...">
        <span class="tituloObra">#${element.titulo}</span>
        <!--<div class="card-body"> -->
          <span class="card-text descripcionObra"> Descripción: ${element.descripcion}<br>  Técnica ${element.tecnica} <br> Dimensiones: ${element.dimension_largo}cm x ${element.dimension_ancho}cm <br> Precio: ${element.precio} $ (Pesos mexicanos)</span>
        <!-- </div> -->
        </a>
  <!--    </div>  -->
           <!-- cierre de la primera obra -->`;
  
      container.innerHTML = contenido;
  
  
      row.appendChild(container);
  
  })
  
  
  
  
  let baseDatosObras;
  
/*
  `
  <div class="card">
      <img src="${element.imagen_normal}" class="card-img-top" alt="">
      <img src="${element.imagen_dos}" class="card-img-top" alt="">
      <div class="card-body">
          <h5 class="card-title title">${element.artista}</h5>
          <p class="card-text"> ${element.categoria}</p>
          <p class="card-text">Técnica: ${element.descripcion}</p>
          <p class="card-text">Precio: ${element.precio} </p>
          <p class="card-text">Descripción: ${element.dimension_largo}</p>
      </div>

  </div>
`


*/


const navBar = `


<!-- pagina nav Bar de arriba abajo la voy a dividir por bloques(divs) que tendran divs adentro de cosas que se tengan que agrupar-->
<div class="bloque1" id="bloque1">
  <div class="logoRedSocial redesSociales">
    <div class="contenedorLogoRS">
      <!--Cada uno de lo logos tendrán su propio div para ajutar su tamaño al contenedor-->
      <a href="https://www.instagram.com/">
        <img
          class="logoInstagram logoRS"
          src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Instagram.png"
          alt=""
        />
      </a>
    </div>

    <div class="contenedorLogoRS" id="contenedorLogoFacebook">
      <a href="https://www.facebook.com/">
        <img
          id="facebookLogo"
          class="logoFacebook logoRS"
          src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/facebook.png"
          alt=""
        />
      </a>
      <!--Al ser el logo de FB mas grande se le dará un tratamiento distinto-->
    </div>
    <div class="contenedorLogoRS">
      <a href="https://www.whatsapp.com/">
        <img
          class="logoWhatsApp logoRS"
          src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/WhatsApp.png"
          alt=""
        />
      </a>
    </div>
  </div>
  <!--Cierre de el div de redes sociales-->
  <div class="contenedorLogoCabecera logoNavbar">
    <a href="../../index.html">
      <img
        id="logoCabecera"
        src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Logo.png"
        alt=""
      />
    </a>
  </div>
  <!--Cierre del div del logo -->
  <div id="botoneraCabecera">
    <div id="loginBoton" class="contenedorBotonCabecera">
      <a class="linkBotonCabecera" href="../pages/registro.html">
        <div
          class="contenedorImgBotonCabecera"
          id="contenedorLoginCabecera"
        >
          <img
            id="loginImg"
            src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Enter.png"
            alt=""
          />
        </div>
        <p class="texto textoBotoneraCabecera" id="textoLogin">Log in</p>
      </a>
    </div>
    <!-- Cierre del login-->
    <div class="contenedorBotonCabecera" id="contenedorFavoritosCabecera">
      <a class="linkBotonCabecera" href="">
        <div
          class="contenedorImgBotonCabecera"
          id="contenedorImgFavoriteBotonCabecera"
        >
          <img
            id="favoriteImg"
            src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Favorite.png"
            alt=""
          />
        </div>
        <p
          id="resaltar"
          class="textoBotoneraCabecera textoNormal resaltar"
        >
          Favoritos
        </p>
        <!--El id resaltar se utilizará en los elementos (creo que solo texto ) que deben de tener el color de pantone                       -->
      </a>
    </div>
    <!-- Cierre del favorite-->
    <div
      class="contenedorBotonCabecera"
      id="contenedorCarritoComprasCabecera"
    >
      <a
        class="linkBotonCabecera"
        href="../components/carrito-flotante.html"
      >
        <div
          class="contenedorImgBotonCabecera"
          id="contenedorImgCarritoBotonCabecera"
        >
          <img
            id="CarritoImg"
            src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/carrito.png"
            alt=""
          />
        </div>
        <p class="texto textoBotoneraCabecera" id="textoCarrito">
          Carrito
        </p>
      </a>
      <!--De esta manera hago que tanto el texto como el png sean botones que direccionan a donde mismo-->
    </div>
    <!-- Cierre del botón de compras-->
  </div>
  <!--Cierre botoneraCabecera-->

  <div class="userID">
    <div id="contenedorImgUserCabecera">
      <img
        id="imgPerfilUser"
        src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Foto de perfil Usuario.png"
        alt=""
      />
    </div>
    <p class="textoNormal" id="welcomeUser">
      Bienvenido (agregar usuario)
    </p>
  </div>
  <!-- cierre de la personalización de la bienvenida de usuario-->
</div>
<!--Cierre del bloque1-->
<div class="bloque2 navBar">
  <!-- <nav id="navList"> -->
  <!-- <button id="botonAbrir" type="button"> -->
  <div class="menuBurguerContenedor">
    <span class="barraMenu1"></span>
    <span class="barraMenu2"></span>
    <span class="barraMenu3"></span>
  </div>
  <!-- </button> -->
  <div id="contenedorNavList">
    <!-- <button id="botonCerrar" type="button"><i class="bi bi-x-square"></i></button> -->
    <ul id="navList">
      <li id="inicio">
        <a
          class="textoNormal"
          href="../../index.html"
          rel="noopener noreferrer"
          >Inicio</a
        >
      </li>
      <!--Se agregó el link con target blank para que abra el link en una nueva pestaña, y  ya que esté el navbar terminado cambiar la dirección de la pestaña actual-->
      <li id="productos">
        <a
          class="textoNormal"
          href="../pages/Pagina del producto.html"
          rel="noopener noreferrer"
          >Productos</a
        >
      </li>
      <li id="Artistas">
        <a
          class="textoNormal"
          href="../../index.html"
          rel="noopener noreferrer"
          >Artistas</a
        >
      </li>
      <li id="Nosotros">
        <a
          class="textoNormal"
          href="../pages/indexAcercaDeNosotros.html"
          rel="noopener noreferrer"
          >Nosotros</a
        >
      </li>
      <li id="Contactanos">
        <a
          class="textoNormal"
          href="../pages/indexAcercaDeNosotros.html"
          rel="noopener noreferrer"
          >Contáctanos</a
        >
      </li>
    </ul>
  </div>
</div>
<!--Cierre del bloque 2 -->
<div class="bloqueBuscador">
  <div class="bloqueNegroBuscador"></div>
  <div id="contenedorBarraBusqueda">
    <img
      id="lupaBarraBusqueda"
      src="../Encontrarte-e-commerce/src/assets/ImgnavBar&acercaDeNosotros/Lupa.png"
      alt=""
    />
    <input id="barraBusqueda" type="text" />
  </div>
  <div class="bloqueNegroBuscador"></div>
</div>
<!-- <i class="bi bi-list"></i> -->






`


const containerNav = document.querySelector(".nav-container");

const container = document.querySelector(".test-container")

containerNav.innerHTML = navBar;

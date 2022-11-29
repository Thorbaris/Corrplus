<template>

  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a href="#">
        <img src="@/img/logo.png" height="35" class="logoBarra"/>
      </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Venta
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/Venta/Casas">Casas</router-link></li>
            <li><router-link class="dropdown-item" to="/Venta/Departamentos">Departamentos</router-link></li>
            <li><router-link class="dropdown-item" to="/Venta/Sitios">Sitios</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/Venta/LocalesComerciales">Locales Comerciales</router-link></li>
            <li><router-link class="dropdown-item" to="/Venta/Oficinas">Oficinas</router-link></li>
            <li><router-link class="dropdown-item" to="/Venta/Bodegas">Bodegas</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/Venta/CamposParcelas">Campos y Parcelas</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Arriendo
          </a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" to="/Arriendo/Casas">Casas</router-link></li>
            <li><router-link class="dropdown-item" to="/Arriendo/Departamentos">Departamentos</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/Arriendo/LocalesComerciales">Locales Comerciales</router-link></li>
            <li><router-link class="dropdown-item" to="/Arriendo/Oficinas">Oficinas</router-link></li>
            <li><router-link class="dropdown-item" to="/Arriendo/Bodegas">Bodegas</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/Arriendo/CamposParcelas">Campos y Parcelas</router-link></li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/QuienesSomos">Quienes somos</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/Contacto">Contacto</router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</template>
<script>
</script>

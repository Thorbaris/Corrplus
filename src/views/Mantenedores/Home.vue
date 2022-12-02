<template>
  <div class="container">
    <p class="lead border-bottom tituloseccion">Propiedades en la Araucanía</p>
    <div class="d-flex">
      <div
        v-for="(propiedad, index) in propiedades"
        :key="index"
        class="card tarjeta"
      >
        <img :src="propiedad.foto" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ propiedad.titulo }}</h5>
          <p class="card-text">
            {{ propiedad.descripcion }}
          </p>
          <div class="card-body d-flex m-0 p-0">
            <div class="divIconos" title="Dormitorios">
              {{ propiedad.dormitorios }}
              <font-awesome-icon icon="fa-solid fa-person-shelter" />
            </div>
            <div class="divIconos" title="Baños">
              {{ propiedad.baños }}
              <font-awesome-icon icon="fa-solid fa-bath" />
            </div>
            <div
              v-if="propiedad.estacionamiento"
              class="divIconos"
              title="Estacionamientos"
            >
              {{ propiedad.estacionamiento }}
              <font-awesome-icon
                title="Estacionamientos"
                icon="fa-solid fa-car"
              />
            </div>
            <div v-else class="divIconos">
              ?
              <font-awesome-icon icon="fa-solid fa-car" />
            </div>
          </div>
          <a href="#" class="btn btn-success"
            >Ver más detalles</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      propiedades: [
        {
          foto: require("@/img/casa1.jpg"),
          titulo: "Casa 150m2",
          descripcion: "Casa en Barrio Ingles",
          dormitorios: 4,
          baños: 2,
          estacionamiento: 2,
        },
        {
          foto: require("@/img/depto1.jpg"),
          titulo: "Departamento 80m2",
          descripcion: "Departamento en el centro de Temuco",
          dormitorios: 3,
          baños: 1,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
</style>

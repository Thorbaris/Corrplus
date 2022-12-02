<template>
  <div class="container">
    <p class="lead border-bottom tituloseccion">Panel de Administrador</p>

    <div class="mx-auto w-50">
      <div class="card">
        <div class="card-body">
            <div v-if="$store.state.logeado">
            <button type="submit" class="btn btn-success adminbutton">Crear Publicacion</button>
            <button type="submit" class="btn btn-primary adminbutton">Editar Publicacion</button>
            <button type="submit" class="btn btn-danger adminbutton">Eliminar Publicacion</button>
            </div>
            <div v-else>
              <h4>Usted debe estar logeado para tener acceso a este panel</h4>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.adminbutton{
  margin: 24px;
}
</style>
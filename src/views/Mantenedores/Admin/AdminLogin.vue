<template>
  <div class="container">
    <p
      class="lead border-bottom"
      style="text-align: left; font-size: 30px; font-weight: 600"
    >
      Login
    </p>

    <div class="mx-auto w-50">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Usuario</label>
              <!-- <span
                v-for="error in v$.data.usuario.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              > -->
              <input
                type="text"
                id="inputUsername"
                class="form-control"
                aria-describedby="usernameHelp"
              />
            </div>

            <form>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Contraseña</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                Conexion / Desconexion Rapida
                <label class="switch">
                  <input v-if="$store.state.logeado" type="checkbox" @click="logearDeslogear()" checked/>
                  <input v-else type="checkbox" @click="logearDeslogear()"/>
                  <span class="slider round"></span>
                </label>
              </div>
            </form>

            <button type="submit" class="btn btn-primary">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    logearDeslogear(){
      this.$store.commit('loginLogout')
    }
  }
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 3px;
  bottom: 4px;
  right: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
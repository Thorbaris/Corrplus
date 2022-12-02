<template>
  <div class="container">
    <p class="lead border-bottom tituloseccion">Contacto</p>
    <div class="mx-auto w-75">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <span
                v-for="error in v$.data.nombre.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              >
              <input
                type="text"
                :class="
                  v$.data.nombre.$error
                    ? 'form-control is-invalid w-50 mb-0'
                    : 'form-control w-50'
                "
                id="inputNombre"
                aria-describedby="nameHelp"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <span
                v-for="error in v$.data.email.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              >
              <input
                type="email"
                :class="
                  v$.data.email.$error
                    ? 'form-control is-invalid w-50 mb-0'
                    : 'form-control w-50'
                "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Numero de contacto</label>
              <span
                v-for="error in v$.data.num_contacto.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              >
              <input
                type="tel"
                :class="
                  v$.data.num_contacto.$error
                    ? 'form-control is-invalid w-50 mb-0'
                    : 'form-control w-50'
                "
                id="Inputphone"
                aria-describedby="phoneHelp"
              />
              <!-- <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div> -->
            </div>

            <hr class="hr" />
            <div class="mb-3">
              <label class="form-label">Asunto</label>
              <span
                v-for="error in v$.data.asunto.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              >
              <input
                type="text"
                :class="
                  v$.data.asunto.$error
                    ? 'form-control is-invalid w-50 mb-0'
                    : 'form-control w-50'
                "
                id="inputAsunto"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Mensaje</label
              >
              <span
                v-for="error in v$.data.mensaje.$errors"
                :key="error.index"
                class="text-danger text-xs"
                >{{ error.$message }}</span
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                :class="
                  v$.data.mensaje.$error
                    ? 'form-control is-invalid w-75 mb-0'
                    : 'form-control w-75'
                "
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              @click="enviarFormulario(data)"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script >
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  name: "Contacto-Form",
  components: {},

  data() {
    return {
      data: {
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      },
      modalSync: false,
    };
  },
  validations() {
    return {
      data: {
        nombre: {
          required: helpers.withMessage(
            " ¡Este campo no puede quedar vacío!",
            required
          ),
        },
        email: {
          required: helpers.withMessage(
            " ¡Este campo no puede quedar vacío!",
            required
          ),
        },
        num_contacto: {
          required: helpers.withMessage(
            " ¡Este campo no puede quedar vacío!",
            required
          ),
        },
        asunto: {
          required: helpers.withMessage(
            " ¡Este campo no puede quedar vacío!",
            required
          ),
        },
        mensaje: {
          required: helpers.withMessage(
            " ¡Este campo no puede quedar vacío!",
            required
          ),
        },
      },
    };
  },
  methods: {
    enviarFormulario(data) {
      this.v$.$touch();
      if (this.v$.data.$errors.length > 0) {
        //this.$swal('¡ Error !', 'El campo nombre se encuentra vacío');
        this.$swal({
          title: "¡ Error !",
          text: "Uno o más campos se encuentran vacíos",
          timer: "2500",
          showConfirmButton: true,
          icon: "error",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal.close();
          }
        });
      } else {
        this.$emit("handleCreate", data);
      }
    },
  },
};
</script>



<style>
/* Dotted red border */
.hr {
  margin: 25px 0px 15px 0px;
  border-top: 1px dashed;
}
</style>
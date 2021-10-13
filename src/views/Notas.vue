<template>
  <div class="container">
    <h1>Notas</h1>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
      <h3>Editar nota</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="notaEditar.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="notaEditar.descripcion"
      />
      <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
      <b-button class="my-2" type="submit" @click="editar = false"
        >Cancelar</b-button
      >
    </form>
    <form @submit.prevent="agregarNota()" v-if="!editar">
      <h3>Agregar una nueva nota</h3>

      <input
        type="text"
        class="form-control my-2"
        placeholder="Nombre"
        v-model="nota.nombre"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Descripcion"
        v-model="nota.descripcion"
      />
      <b-button class="btn-success my-2" type="submit">Agregar</b-button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nota</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.descripcion }}</td>
          <td>
            <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)"
              >Eliminar</b-button
            >
            <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)"
              >Editar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      nota: { nombre: "", descripcion: "" },
      editar: false,
      notaEditar: {},
    };
  },

  created() {
    this.listarNotas();
  },
  //ERORES
  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked &&
        errors.push(
          "Por favor acepte los términos y condiciones para continuar"
        );
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Escoja un item");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Nombre debe tener máximo 30 carácteres");
      !this.$v.name.required && errors.push("Nombre es requerido");
      return errors;
    },
    textoErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength && errors.push("Máximo 3000 caracteres");
      !this.$v.name.required && errors.push("Texto es requerido");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Ingrese un E-mail valido");
      !this.$v.email.required && errors.push("E-mail es requerido");
      return errors;
    },
  },
  // METODOS

  methods: {
    listarNotas() {
      this.axios
        .get("/nota")
        .then((res) => {
          console.log(res.data);
          this.notas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarNota() {
      this.axios
        .post("/nueva-nota", this.nota)
        .then((res) => {
          this.notas.push(res.data);
          this.nota.nombre = "";
          this.nota.descripcion = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Agregada";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarNota(id) {
      this.axios
        .delete(`/nota/${id}`)
        .then((res) => {
          const index = this.notas.findIndex(
            (item) => item._id === res.data._id
          );
          this.notas.splice(index, 1);
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Eliminada";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      //ME TRAIGA
      this.axios
        .get(`/nota/${id}`)
        .then((res) => {
          this.notaEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarNota(item) {
      this.axios
        .put(`/nota/${item._id}`, item)
        .then((res) => {
          const index = this.notas.findIndex((n) => n._id === res.data._id);
          this.notas[index].nombre = res.data.nombre;
          this.notas[index].descripcion = res.data.descripcion;
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Editada";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

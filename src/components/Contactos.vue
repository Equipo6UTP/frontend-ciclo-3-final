<template>
  <div>
    <!--Alerta 3 -->

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="mensaje.color"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ mensaje.texto }}
    </b-alert>

    <!--Formulario -->
    <v-card class="mx-auto" color="transparent" width="600px">
      <v-card-text>
        <form @submit.prevent="agregarContacto()">
          <v-container fluid>
            <v-text-field
              v-model="contacto.nombre"
              :counter="30"
              :rules="nombreRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              v-model="contacto.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-select
              v-model="contacto.item"
              :items="items"
              :rules="[(v) => !!v || 'Item es requerido']"
              label="Item"
              required
            ></v-select>

            <v-textarea
              v-model="contacto.elMensaje"
              :counter="30000"
              :rules="mensajeRules"
              label="Tu mensaje"
              required
            ></v-textarea>

            <v-checkbox
              v-model="checkbox"
              :rules="[(v) => !!v || 'Acepta para continuar']"
              label="¿Aceptas el tratamiento de datos personales?"
              required
            ></v-checkbox>

            <b-button class="btn-success mr-4" type="submit">Agregar</b-button>

            <v-btn @click="borrar()"> Borrar</v-btn>
          </v-container>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //ESTE ES EL CONTENEDOR 1
      contactos: [],
      //v-model2
      contacto: { nombre: "", email: "", item: "", elMensaje: "" },
      //ALERTA 3
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,
      //SELECT
      select: null,
      items: ["Duda", "Queja", "Reclamo", "Ayuda", "Felicitación"],
      checkbox: false,
      //REGLAS BOTON
      nombreRules: [
        (v) => !!v || "Nombre es requerido",
        (v) => (v && v.length <= 10) || "Nombre menor a 30 carácteres",
      ],
      emailRules: [
        (v) => !!v || "E-mail es requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      mensajeRules: [
        (v) => !!v || "Comentario requerido",
        (v) => (v && v.length <= 10) || "Máximo 30000 caractéres",
      ],
    };
  },
  created() {
    //LLAMADO AL METODO 1
    this.listarContactos();
  },
  methods: {
    //BORRAR
    borrar() {
      this.contacto.nombre = "";
      this.contacto.email = "";
      this.contacto.item = null;
      this.contacto.elMensaje = "";
      this.checkbox = false;
    },

    //LISTAR CONTACTOS1
    listarContactos() {
      this.axios
        .get("/contacto")
        .then((res) => {
          console.log(res.data);
          this.contactos = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    // AGREGAR CONTACTO 2
    agregarContacto() {
      //aca se usa el contacto de v-model
      this.axios
        .post("/nuevo-contacto", this.contacto)
        .then((res) => {
          this.contactos.push(res.data);
          this.contacto.nombre = "";
          this.contacto.email = "";
          this.contacto.item = "";
          this.contacto.elMensaje = "";
          this.checkbox = false;
          //llamo alerta implementada
          this.mensaje.color = "success";
          this.mensaje.texto =
            "Hemos recibido tus comentarios, nos comunicaremos pronto.";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    // ALERTA 3
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style>
</style>
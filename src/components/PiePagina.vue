<template>
  <div>
    <v-footer color="cyan darken-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="templateQuienesSomos()"
        >
          Quienes Somos
        </v-btn>

        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="templateNuestrosServicios()"
        >
          Nuestros Servicios
        </v-btn>

        <v-btn
          color="white"
          text
          rounded
          class="my-2"
          @click="templateContactenos()"
        >
          Contáctenos
        </v-btn>

        <v-col class="cyan darken-1 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Equipo 6 Utp</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  //se mete el metodo para el boton

  methods: {
    inicio() {
      console.log("ir al home...");
      this.$router.push("/");
    },
    templateContactenos() {
      console.log("ir contactenos...");
      this.$router.push("/contactenos");
    },
    templateQuienesSomos() {
      console.log("ir Quienes Somos...");
      this.$router.push("/quienes_somos");
    },
    templateNuestrosServicios() {
      console.log("ir Nuestros Servicios...");
      this.$router.push("/nuestros_servicios");
    },
  },
};
</script>

<style>
</style>
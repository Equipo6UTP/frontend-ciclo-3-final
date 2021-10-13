<template>
  <div>
    <h2>Contáctenos</h2>

    <v-divider inset></v-divider>
    <br />

    <contactos />
    <br />
    <br />
    <br />

    <!-- componente footer -->
    <pie-pagina />
  </div>
</template>

<script>
import Contactos from "../components/Contactos.vue";

import PiePagina from "../components/PiePagina.vue";

export default {
  components: { PiePagina, Contactos },

  data: () => ({}),

  methods: {},
};
</script>

<style>
</style>
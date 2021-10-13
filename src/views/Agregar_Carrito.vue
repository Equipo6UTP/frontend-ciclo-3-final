<template>
  <div>
    <!-- componente Carrito -->
    <carrito />

    <br />
    <br />

    <!-- componente footer -->
    <pie-pagina />
  </div>
</template>

<script>
import Carrito from "../components/Carrito.vue";

import PiePagina from "../components/PiePagina.vue";

export default {
  components: { PiePagina, Carrito },
  data() {
    return {};
  },
};
</script>

<style>
</style>
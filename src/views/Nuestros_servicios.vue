<template>
  <div>
    <!-- componente oferta-->

    <oferta />

    <br />
    <br />
    <br />

    <!-- componente footer -->
    <pie-pagina />
  </div>
</template>

<script>
import PiePagina from "../components/PiePagina.vue";
import Oferta from "../components/Oferta.vue";

export default {
  components: { PiePagina, Oferta },

  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
    };
  },

  data: () => ({
    overlay: false,
  }),
  data: () => ({
    show: false,
  }),
  //se mete el metodo para el boton
  methods: {
    templateCarrito() {
      console.log("ir al Carrito de Compras...");
      this.$router.push("/agregar_carrito");
    },
  },

  data: () => (
    {
      rating: 4,
    },
    {
      selection: [],
      items: ["Aseo General Hogar ", "Electricidad Hogar", "Lavandería"],
    }
  ),
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

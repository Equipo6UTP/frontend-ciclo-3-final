<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <h1 class="teal--text font-weight-medium text-center">Servi-Hogar</h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/quienes_somos">Quienes Somos</router-link> |
        <router-link to="/nuestros_servicios">Nuestros Servicios</router-link> |
        <router-link to="/agregar_carrito">Agregar al Carrito</router-link> |
        <router-link to="/contactenos">Contactenos</router-link>|
        <router-link to="/notas">Notas</router-link> |
        <router-link to="/about">About</router-link> 
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #006064;
    &.router-link-exact-active {
      color: #00b0ff;
    }
  }
}
</style>

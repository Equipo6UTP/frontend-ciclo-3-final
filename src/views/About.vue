<template>
  <div class="about">
    <h1>Te contaremos sobre nosotros</h1>

    <!--- componente tarjeta--->

    <v-card class="mx-auto" max-width="400">
      <v-img src="../assets/icono P62-6.png" height="200px"></v-img>

      <v-card-title> Los mejores servicios para el Hogar </v-card-title>

      <v-card-subtitle> Personal dispuestoa servirle </v-card-subtitle>
      <br />
      <v-card-subtitle>
        Somos una empresa creada por estudiantes de MisionTic2022 UTP con el
        propósito de mejorar la calidad de vida de los hogares con servicios de
        alta calidad
      </v-card-subtitle>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
        </div>
      </v-expand-transition>
    </v-card>
    <!--- componente DB-->
    <tabla />
  </div>
</template>

<!---se mete el script--->
<script>
</script>
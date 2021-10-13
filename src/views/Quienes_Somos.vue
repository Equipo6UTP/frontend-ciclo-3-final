<template>
  <div>
    <!-- Código imagen -->
    <v-container class="fill-height" fluid style="min-height: 434px">
      <v-fade-transition mode="out-in">
        <v-img
          src="https://image.shutterstock.com/image-photo/collage-portraits-ethnically-diverse-mixed-600w-725291137.jpg"
          height="300"
        ></v-img>

        <v-card-title class="text-h6"> ¿Qúienes Somos? </v-card-title>
      </v-fade-transition>
    </v-container>

    <!-- Título -->

    <h2>¿Quíenes Somos?</h2>

    <!-- PArrafo -->

    <p>
      Somos una empresa que nace en base a satisfacer las necesidades de
      nuestros consumidores
    </p>

    <!-- Desplegable-->
    <v-card class="mx-auto" color="transparent" width="1500px">
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> Misión </v-expansion-panel-header>

            <v-expansion-panel-content>
              Ser el mejor proveedor de servicios para el hogar en el pais. Para
              lograrlo, hemos establecido una cultura que apoya a los miembros
              de nuestro equipo para que ellos puedan dar un servicio
              excepcional a nuestros clientes.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Visión </v-expansion-panel-header>

            <v-expansion-panel-content>
              Nuestra empresa espera, lograr posicionarse como una de las
              mejores en el ramo de servicios para el hogar conformando un grupo
              humano con altos valores morales, con gran profesionalismo ,
              siempre buscando el bienestar de clientes y empleados haciendo un
              mejor país cada dia.
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header> Principios </v-expansion-panel-header>

            <v-expansion-panel-content>
              1- Transparencia... <br />
              2- Economia... <br />
              3- Responsabilidad <br />
              4- Moralidad... <br />
              5- Celeridad...
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header> Valores </v-expansion-panel-header>

            <v-expansion-panel-content>
              1- Honestidad ... <br />
              2- Calidad ... <br />
              3- Puntualidad ... <br />
              4- Pasión ... <br />
              5 - Competitividad ... <br />
              6- Trabajo en equipo ... <br />
              7- Orientación al cliente ... <br />
              8- Responsabilidad social...
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <br />
    <br />
    <br />

    <!-- componente footer -->
    <pie-pagina />
  </div>
</template>

<script>
import PiePagina from "../components/PiePagina.vue";

export default {
  components: { PiePagina },
};
</script>

<style>
</style>
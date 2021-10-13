<template>
  <div>
    <!-- componente Entrada-->
    <v-container>
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="300"
        max-width="50000"
        src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
      >
        <br />
        <br />
        <br />
        <br />
        <v-card>
          <div class="text-h3 gray-4--text">
            SERVICIOS ESPECIALIZADOS PARA EL HOGAR
          </div>
          <br />
          <div class="text-h5 gray-4--text">
            Deja a los Expertos las Labores del Hogar
          </div>
        </v-card>
      </v-img>
    </v-container>

    <!-- Imagen de Servicios-->
    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img :src="item.img" height="200px">
                  <v-card-title class="text-h6 white--text font-weight-black">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p class="mt-4 subheading text-center">
                        {{ item.title }}
                      </p>

                      <div>
                        <p
                          class="
                            ma-0
                            text-body-1
                            font-weight-bold font-italic
                            text-center
                          "
                        >
                          {{ item.text }}
                        </p>
                        <p
                          class="
                            text-caption
                            font-weight-medium font-italic
                            text-center
                          "
                        >
                          {{ item.subtext }}
                        </p>
                      </div>

                      <div class="align-self-center">
                        <v-btn
                          color="white"
                          text
                          rounded
                          class="my-2"
                          @click="templateNuestrosServicios()"
                        >
                          Click Aqui
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <!-- componente footer -->
    <pie-pagina />
  </div>
</template>

<script>
import PiePagina from "../components/PiePagina.vue";

export default {
  components: { PiePagina },
  data: () => ({
    show: false,
    items: [
      {
        title: "Aseo General Hogar",
        text: `El mejor personal de limpieza para tu hogar`,
        img: "https://media.istockphoto.com/photos/close-up-of-female-hand-that-using-serviette-picture-id862708922?k=20&m=862708922&s=612x612&w=0&h=dpASLL0r-8InBdYCv4XxR7-T2AKnRiZBWnthJwn8oWE=",
      },
      {
        title: "Electricidad Hogar",
        text: "Los mejores asesores de electricidad para tu hogar aquí",
        img: "https://cdn.pixabay.com/photo/2019/05/12/15/07/electric-4198293_960_720.jpg",
      },
      {
        title: "Lavandería",
        text: "El mejor personal de lavandería",
        img: "https://cdn.pixabay.com/photo/2017/08/22/10/47/washing-machine-2668472_960_720.jpg",
      },
      {
        title: "Disponible Pronto",
        text: "Pronto",
        img: "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg",
      },
      {
        title: "Disponible Pronto",
        text: "Pronto",
        img: "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg",
      },
      {
        title: "Disponible Pronto",
        text: "Pronto",
        img: "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_960_720.jpg",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
  methods: {
    templateNuestrosServicios() {
      console.log("ir Nuestros Servicios...");
      this.$router.push("/nuestros_servicios");
    },
  },
};
</script>

<style>
</style>
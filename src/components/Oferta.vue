
<template>
  <div>
    <h1>Oferta de Servicios</h1>

    <v-container>
      <v-row justify="center">
        <v-expansion-panels inset>
          <v-expansion-panel v-for="(item, index) in ofertas" :key="index">
            <v-expansion-panel-header>
              <v-row no-gutters>
                <v-col cols="12" sm="6" md="5">
                  <v-img
                    contain
                    lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="243"
                    max-width="230"
                    :src="item.imagen"
                  ></v-img>

                  <h5 class="teal--text font-weight-black">
                    {{ item.nombre }}
                  </h5>
                </v-col>
                <v-col cols="6" md="6">
                  <br />

                  <br />
                  <h4 class="teal--text font-weight-regular text-center">
                    {{ item.ofertaServicio }} reviews
                  </h4>

                  <v-rating
                    :value="item.calificacion"
                    readonly
                    dense
                    color="orange"
                    background-color="orange"
                    hover
                    large
                    align="center"
                    class="mr-1"
                  ></v-rating>
                  <h6 class="teal--text font-weight-bold text-center">
                    {{ item.reviews }} reviews
                  </h6>
                  <br />
                </v-col>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <br />
              <br />

              <v-icon large color="cyan darken-2"> mdi-account </v-icon>
              Sobre mi: {{ item.descripcion }}

              <br />
              <br />
              <br />

              <v-row no-gutters>
                <v-col cols="12" sm="6" md="6" align="left">
                  <v-icon large color="cyan darken-2"> mdi-domain</v-icon>
                  Localización: {{ item.direccion }}
                  <br />
                  <v-icon large color="cyan darken-2"> mdi-email</v-icon>
                  E-mail: {{ item.email }}
                </v-col>
                <v-col cols="12" md="" align="left">
                  <v-icon large color="cyan darken-2"> mdi-phone</v-icon>
                  Teléfono {{ item.telefono }}
                  <br />
                  <v-icon large color="cyan darken-2"> mdi-clock</v-icon>
                  Horario:{{ item.horasContacto }}
                </v-col>
              </v-row>

              <br />

              <v-btn
                color="teal"
                class="white--text align-center"
                absolute
                right
                @click="templateCarrito()"
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              <br />
              <br />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  //ESTRELLAS
  data: () => ({
    rating: 3,
  }),

  data() {
    return {
      //ESTE ES EL CONTENEDOR 1
      ofertas: [],
    };
  },
  created() {
    //LLAMADO AL METODO 1
    this.listarOfertas();
  },
  methods: {
    //LISTAR CONTACTOS1
    listarOfertas() {
      this.axios
        .get("/ofertante")
        .then((res) => {
          console.log(res.data);
          this.ofertas = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    templateCarrito() {
      console.log("ir al Carrito de Compras...");
      this.$router.push("/agregar_carrito");
    },
  },
};
</script>

<style>
</style>
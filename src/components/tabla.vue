<template>
  <div>
    <h1>Servicios Adquiridos</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Contacto</th>
          <th scope="col">Email</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in compras" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.nombre }}</td>
          <td>{{ item.email }}</td>
          <td>
            <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)"
              >Eliminar</b-button
            >
            <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)"
              >Editar</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //ESTE ES EL CONTENEDOR 1
      compras: [],
    };
  },
  created() {
    //LLAMADO AL METODO 1
    this.listarContactos();
  },
  methods: {
    //LISTAR CONTACTOS1
    listarContactos() {
      this.axios
        .get("/contacto")
        .then((res) => {
          console.log(res.data);
          this.compras = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
  },
};
</script>

<style>
</style>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //arreglos
  state: {
    //personajes: []--> arreglo se tamaño n
  },
  mutations: {
      //setpersonajes(state,payload){
        //state.personales=payload---> Payload es lo que recibe
      //}
  },
  actions: { //es como lo ejecuto 
    //async getPersonakes({commit--->me va a hacer el set con la data }){
      // const peticion= await fetch('coipio el link de mi api'); fetch ----> es como una base de datos recorriendo cada linea 
      //const data=await peticion.jason;
      //console.log(data;
      //commit('setPersonajes', data);
    //}
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libros:[]
  },
  mutations: {
    SET_LIBROS(state,libros){
      state.libros = libros
    }
  },
  actions: {
    setLibros({commit}){
      axios.get('http://localhost:3000/')
      .then(response=>{
        commit('SET_LIBROS',response.data)
      })
    },
    crearLibro({commit},{params, onComplete, onError}){
      axios.post('http://localhost:3000/', params)
      .then(onComplete)
      .catch(onError)}
  },
  getters:{
    allLibros: state =>{
      return state.libros
    }
  }
})

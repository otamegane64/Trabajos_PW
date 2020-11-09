import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    facts:[],
    dato:{}
  },
  mutations: {
    LISTAR_FACTS(state, fact){
      state.facts = fact
    },
    RANDOM(state, dato){
      state.dato = dato

    }
  },
  getters:{
    doneFacts: state =>{
      return state.facts
    },
    doneRandom: state =>{
     return state.dato
    }
  },
  actions: {
    getFacts({ commit }){
      axios.get('http://cat-fact.herokuapp.com/facts')
      .then(response =>{
        commit('LISTAR_FACTS', response.data.all)
      })
    },
    getRandom({commit}){
      axios.get('http://cat-fact.herokuapp.com/facts/random')
      .then(response=>{
        commit('RANDOM',response.data)
      })
    }
  },
  modules: {
  }
})

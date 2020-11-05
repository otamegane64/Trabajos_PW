import { createStore } from 'vuex'

export default createStore({
  state: {
    total: 110
  },
  mutations: {
    aumentar(state){
      state.total++;
    }
  },
  actions: {
    accionaumentar({commit}){
      commit('aumentar');
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]
  },
  mutations: {
    SET_TODO(state, todo){
      state.todos.push(todo)
    }
  },
  actions: {
    setTodo({commit}, todo){
      commit('SET_TODO',todo)
    }
  },
  modules: {
  }
})

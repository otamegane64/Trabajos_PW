import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    SET_TODOS(state,todos){
      state.todos = todos
    }
  },
  getters:{
    doneTodos: state => {
      return state.todos.filter(todo => todo.completed)}
    },
  actions: {
    getTodos({commit}){
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response =>{
        commit('SET_TODOS',response.data)
      })
    }
  },
  modules: {
  }
})

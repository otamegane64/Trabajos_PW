<template>
  <div class="home">
    <h1>Mis todos</h1>
    <div v-for="todo in todos" :key="todo.id">
      {{todo.title}}
      <p>{{todo.completed ? 'Completo': 'Incompletos'}}</p>
      <hr>
    </div>
    
  
  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {

  },
  methods:{
    ...mapActions(['getTodos'])
  },
  mounted(){
    this.getTodos()
  },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

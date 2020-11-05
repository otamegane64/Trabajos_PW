<template>
  <div>
    <div v-for="todo in doneTodos" :key="todo.id">
    {{todo.title}}
    <p>{{todo.completed ? 'Completo': 'Incompletos'}}</p>
    <hr>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'About',
  computed:{
    ...mapGetters(['doneTodos'])
  }

}
</script>

<style>

</style>
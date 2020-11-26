<template>
  <div class="home">
    <h1>Agregar ToDo</h1>
    <form  @submit.prevent="guardarToDos"> <!--Nombre-->
          <div class="form-group">
           <label for="InputNombre">Nombre</label>
           <input type="text" v-model.trim="todo.nombre" class="form-control" id="InputNombre" placeholder="Ingrese Nombre">
         </div>
         <hr>
         <!--Tipos checkBox-->
         <div>Tipos</div>
        <div class="form-check form-check-inline">
          <input v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Hogar">
          <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
        </div>
         <div class="form-check form-check-inline">
          <input v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Escuela">
          <label class="form-check-label" for="inlineCheckbox1">Escuela</label>
        </div>
         <div class="form-check form-check-inline">
          <input v-model="todo.tipos" class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Oficina">
          <label class="form-check-label" for="inlineCheckbox1">Oficina</label>
        </div>
        <hr>
        <!--RadioButtons-->
        <div>Prioridad</div>
        <div class="form-check form-check-inline">
          <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Baja">
          <label class="form-check-label" for="inlineRadio1">Baja</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Media">
          <label class="form-check-label" for="inlineRadio1">Media</label>
        </div>
        <div  class="form-check form-check-inline">
          <input v-model="todo.prioridad" class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Alta">
          <label class="form-check-label" for="inlineRadio1">Alta</label>
        </div>
        <hr>
        <!--Horas requeridad-->
         <div class="form-group">
           <label for="InputHoras">Horas Requeridas</label>
           <input type="number" v-model.number="todo.horas" class="form-control" id="InputHoras" placeholder="Total de horas">
         </div>
         <button type="submit" class="btn btn-success" :disabled="bloquearBoton" >Guardar</button>
    </form>
  </div>
</template>

<script>

import {nanoid} from 'nanoid'
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      todo:{
        id:'',
        nombre:'',
        tipos: [],
        prioridad: '',
        horas:0

      }
    }
  },
  methods: {
    ...mapActions(['setTodo']),
    guardarToDos(){
      console.log(this.todo)
      this.todo.id = nanoid(5);
      console.log(this.todo.id)
  
    }
  },
  computed:{
    bloquearBoton(){
      return this.todo.nombre.trim === "" ? true : false
    }
  }
}
</script>

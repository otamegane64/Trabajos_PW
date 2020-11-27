<template>
  <div class="home">
  <h1>Libros</h1>
   <b-button variant="primary" class="float-right mb-3" to="/agregar-libro">Agregar</b-button>
   <Tabla :fields ="campos" :items="allLibros"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabla from '../components/Tabla'
import{mapActions,mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    Tabla
  },
  data(){
    return{
      campos:[
         {key: 'id', label:'ID'},
      {key: 'titulo', label:'Titulo'},
      {key: 'autor', label:'Autor'},
      {
        key: 'num_paginas', 
        label:'Numero de paginas',
        formatter: value =>{
          return value || "Información no Agregada"
        }},
        {
        key: 'anio', 
        label:'Año',
        formatter: value =>{
          return value || "Información no Agregada"
        }}
      ]
    }
  },
  methods:{
    ...mapActions(['setLibros'])
  },
  created(){
    this.setLibros();
  },
  computed:{
    ...mapGetters(['allLibros'])
  }
}
</script>

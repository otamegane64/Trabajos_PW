<template>
  <div class="home">
  <h1>Personas</h1>
  <b-button variant="primary" class="float-right mb-3" to="/agregar-persona">Agregar</b-button>
  <Tabla :fields="campos" :items="allPersonas">
    <template slot="actions" slot-scope="{ item }">
      <b-button size="sm" variant="outline-primary"
      @click="onEditar(item)">
        Editar
      </b-button>
    </template>
  </Tabla>
  </div>
</template>

<script>
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
      {key: 'id', label:'Clave'},
      {key: 'nombre', label:'Nombre'},
      {key: 'direccion', label:'Dirección',
      formatter: value =>{
          return value || "Información no Agregada"
        }},
      {
        key: 'telefono', 
        label:'Teléfono',
        formatter: value =>{
          return value || "Información no Agregada"
        }},
        {key: 'actions', label:'Acciones'}
    ]
  }
  },
  methods:
  {
    ...mapActions(['setPersonas']),
    onEditar(item){
      console.log(item);
      this.$router.push({
        name: 'Editar',
        params:{
          id: item.item.id
        }
    })
    }
  },
  created(){
    this.setPersonas();
  },
  computed:{
    ...mapGetters(['allPersonas'])
  }
}
</script>

<template>
  <div>
      <h1>Editar persona</h1>
      <b-form @submit.prevent="guardarPersona">
        <Input
          v-model="persona.id"
          label="Clave"
          id="clave"
          disabled
          class="mb-2"
          />
          <Input
          v-model="persona.nombre"
          label="Nombre"
          id="nombre"
          placeholder="Ingrese Nombre de la persona"
          mensajeError="El nombre es obligatorio"
          :error="erroresValidacion && !validacionNombre"
          class="mb-2"
          />
          <Input
          v-model="persona.direccion"
          label="Direccion"
          id="direccion"
          placeholder="Ingrese direccion"/>
          <Input
          v-model="persona.telefono"
          label="Telefono"
          id="telefono"
          maxlength="10"
          placeholder="Ingrese el telefono"/>

          <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
      </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
import Vue from 'vue'
export default {
    name: 'Editar',
     components:{
        Input
    },
    data(){
        return{
            persona:{
                id:0,
                nombre: '',
                direccion: '',
                telefono: ''
            },
            erroresValidacion: false
        }
    },
    computed:{
        validacionNombre(){
            return (
                this.persona.nombre !== undefined &&
                this.persona.nombre.trim() !== ''
            )
        }
    },
    methods:{
        ...mapActions(['obtenerPersona', 'editarPersona']),
        guardarPersona(){
            if(this.validacionNombre){
            this.erroresValidacion = false
            console.log(this.persona);
            //Editar Persona
            this.editarPersona({
              id: this.persona.id,
              params: this.persona,
              onComplete:(response)=>{
                this.$notify({
                  type: 'success',
                  title: response.data.mensaje
                });
                this.$route.push({
                  name: 'Home'
                })
              },
              onError:(error)=>{
                this.$notify({
                  type: 'error',
                  title: error.response.data.mensaje
                })
              }
            })

            }else{
            this.erroresValidacion = true
            }
                
        }
    },
    created(){
      this.obtenerPersona({
        id: this.$route.params.id,
        onComplete: (response)=>{
          console.log("info", response.data.data[0])
          Vue.set(this,'persona',response.data.data[0])

        }
      })
    }

}
</script>

<style>

</style>
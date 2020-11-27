<template>
  <div>
      <h1>Agregar Libros</h1>
      <b-form @submit.prevent="guardarLibro">
          <Input
          v-model="libro.titulo"
          label="Titulo"
          id="titulo"
          placeholder="Ingrese el titulo del libro"
          mensajeError="El Titulo es obligatorio!"
          :error="erroresValidacion && !validacionTitulo"
          class="mb-2"
          />
           <Input
          v-model="libro.autor"
          label="Autor"
          id="autor"
          placeholder="Ingrese el autor del libro"
          class="mb-2"
          />
          <Input
          v-model="libro.num_paginas"
          label="Numero de paginas"
          id="num_paginas"
          type="numeric"
          maxlength="4"
          placeholder="Ingrese Numero de paginas"/>
          <Input
          v-model="libro.anio"
          label="año"
          id="anio"
          type="numeric"
          maxlength="4"
          placeholder="Ingrese el año de la creacion"/>

          <b-button type="submit" variant="success" class="float-right mt-3">Guardar</b-button>
      </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    components:{
    Input
    },
     data(){
        return{
            libro:{
                titulo: '',
                autor: '',
                num_paginas: '',
                anio: ''
            },
            erroresValidacion: false
        }
    },
     computed:{
        validacionTitulo(){
            return (
                this.libro.titulo !== undefined &&
                this.libro.titulo.trim() !== ''
            )
        }
    },
    methods:{
        ...mapActions(['crearLibro']),
        guardarLibro(){
            if(this.validacionTitulo){
                this.erroresValidacion = false
                this.crearLibro({
                    params: this.libro,
                    onComplete:(response)=>{
                        this.$notify({
                            type:'success',
                            title: response.data.mensaje
                        });
                        this.$router.push({
                            name:'Home'
                        })

                    },
                    onError: (error)=>{
                        this.$notify({
                        type:'error',
                        title: error.response.data.mensaje
                    });
                }
            })
        } else{
            this.erroresValidacion = true
        }
    }

}}
</script>
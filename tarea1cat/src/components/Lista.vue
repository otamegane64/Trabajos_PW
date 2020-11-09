<template>
  <div class="contendor">
       <h3>{{id}}</h3>
      <h2>{{texto}}</h2>
      <h3>{{tipo}}</h3>
  </div>
</template>

<script>
export default {
    name:'Lista',
    props:{
        
        id: String,
        texto: String,
        tipo: String
    }

}
</script>

<style>
.contenedor
{
    border: 2px solid black;
    margin: 20px;
}
</style>
<template>
  <div>
      <h2>{{tipo}}</h2>
      <h3>{{texto}}</h3>
      <h4>{{fuente}}</h4>
  </div>
</template>

<script>
export default {
  name: 'DatoRandom',
  props:{
    tipo: String,
    texto: String,
    fuente: String

  }
}
</script>

<style>

</style>
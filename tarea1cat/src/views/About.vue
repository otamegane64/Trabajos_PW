<template>
  <div class="about">
    <h1>Aqui hay muchos más datos ramdoms sobre michis</h1>
    <button @click="getRandom()">Dato random</button>
    <!--<div>
      <DatoRandom :key="dato._id" :texto="dato.text" :tipo="dato.type" :fuente="dato.source"/>
    </div>-->

  </div>
</template>
<script>
import { mapActions, mapGetters} from 'vuex'
import DatoRandom from '@/components/DatoRandom.vue'
export default {
  components:{
    DatoRandom
  },
  computed:{
    ...mapGetters(['doneRandom'])
  },

  methods:{
    ...mapActions(['getRandom'])
  
  }
}
</script>

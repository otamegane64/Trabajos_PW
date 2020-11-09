<template>
  <div class="home">
    <h1>Informacion que cura</h1>
    <div class="contenedor" v-for="fact in doneFacts" :key="fact._id">
   <Lista :id="fact._id" :texto="fact.text" :tipo="fact.type"/>
    </div>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import Lista from '@/components/Lista.vue'
import { mapActions, mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    Lista
  },
  computed:{
    ...mapGetters(['doneFacts'])
  },
  mounted(){
    this.getFacts()
  },
  methods:{
    ...mapActions(['getFacts'])
  }
}
</script>

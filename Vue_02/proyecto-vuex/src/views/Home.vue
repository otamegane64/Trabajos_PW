<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="30">
    <p>Mi total es {{total}}</p>
    <button @click="accionaumentar()">Aumentar</button>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      titulo: 'proyecto en vuex'
    }
  },
  methods:{
    ...mapActions(['accionaumentar'])

  },
  computed:
  {
    ...mapState(['total'])
  }
}
</script>

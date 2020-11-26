<template>
   <div>
    <b-table 
    striped 
    bordered 
    :items="items"
    :fields="fields"
    >
    <template #cell(actions)="data">
      <slot name="actions" :item="data"></slot>
    </template>
    
    
    </b-table>
  </div>
</template>

<script>
export default {
    name:'Tabla',
    props:{
        items:{
          type:Array
        },
        fields: Array
    }

}
</script>

<style>

</style>
<template>
  <v-container id="home" grid-list-xs>
    
     <mainOsaz />
  </v-container>
 
</template>

<script>
  import mainOsaz from '../components/mainOsaz'
  

  export default {
    components: {
      mainOsaz
    }
  }
</script>

<style scoped>
#home{  
  display: asbolute;
  width: 100%;
}
</style>


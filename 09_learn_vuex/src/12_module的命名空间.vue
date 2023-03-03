<template>
  <div>
    <h2>{{$store.state.rootCounter}}</h2>
    <h2>{{$store.state.home.homeCounter}}</h2>
    <h2>{{$store.getters["home/dbCounter"]}}</h2>
  </div>

</template>

<script>

 export default {
     
  }
</script>

<style scoped>

</style>
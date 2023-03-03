<template>
  <div>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addFn">+1</button>
  </div>

</template>

<script>

 export default {
      methods:{
        addFn(){
          this.$store.commit('incrementN',10)
        }
      }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{counter}}</h2>
    <h2>{{age}}</h2>
    <h2>{{sCounter}}</h2>
    <h2>{{sName}}</h2>
  </div>

</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed:{
      //其他的计算属性,从state获取
      // ...mapState(["counter","age"])

      ...mapState({
        sCounter:state=>state.counter,
        sName:state=>state.name
      })
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <!-- <h2>{{$store.getters.totalPrice}}</h2>
      <h2>{{$store.getters.totalPriceCreaterN(2)}}</h2> -->
    <!-- <h2>{{totalPrice}}</h2> -->
    <h2>{{totalPrice}}</h2>
  </div>

</template>

<script>
import {useGetters} from './hooks/useGetters'
import {computed} from 'vue'
 export default {
     setup(){
      const  storeState=useGetters(["totalPrice"])

    
      return{
       
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>
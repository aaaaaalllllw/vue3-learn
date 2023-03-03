<template>
  <div>
    <h2>{{$store.getters.totalPrice}}</h2>
      <h2>{{$store.getters.totalPriceCreaterN(2)}}</h2>
    <h2>{{totalPrice}}</h2>
    <h2>{{price}}</h2>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import {computed} from 'vue'
 export default {
    computed:{
      ...mapGetters(["totalPrice"]),
      ...mapGetters({
        price:'totalPrice'
      })
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
   <h3>{{homeCounter}}</h3>
  </div>

</template>

<script>
import {  createNamespacedHelpers} from " vuex";
// const {mapState,mapGetters,mapMutations,mapActions}=createNamespacedHelpers("home")
import {useState,useGetters} from './hooks/useMapper'
 export default {
     setup(){
      const state=useState("home",["homeCounter"])
      return{
        ...state
      }
     }
  }
</script>

<style scoped>

</style>
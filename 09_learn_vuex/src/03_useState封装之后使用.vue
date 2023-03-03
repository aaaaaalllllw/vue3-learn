<template>
  <div>
   
 
    <h2>{{counter}}</h2>
  </div>

</template>

<script>
import {  useState} from "./hooks/useState";
 import {computed} from 'vue'
 export default {
    
   setup(){
      const  storeState=useState(["counter","age"])

    
      return{
       
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>
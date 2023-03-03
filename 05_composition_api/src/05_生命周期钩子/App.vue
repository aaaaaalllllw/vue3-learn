<template>
    <div>
        <h2 @click="increment">{{counter}}</h2>
    </div>
</template>

<script>
    import {ref,onMouted,onUpdated} from 'vue'
    export default {
       setup(){
         const counter=ref(0)
         const increment=()=>counter.value++

         onMouted(()=>{
            console.log("App Mounted");
         })
          onMouted(()=>{
            console.log("App Mounted1");
         })
         onUpdated(()=>{
            console.log("App onUnmounted");
         })
         return{
            counter,
            increment
         }

       }

    }
</script>

<style scoped>

</style>
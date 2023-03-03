<template>
   <div>
     <h2>我是vue渲染出来的</h2> 
    <hello-world></hello-world>
   </div>
</template>
<script>
import HelloWorld from './Hello.vue'
export default {
    components:{
        HelloWorld:HelloWorld
    },
      data(){

      }
}
</script>

<style scoped>

</style>
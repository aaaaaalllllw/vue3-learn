<template>
  <div>
    {{info.name}}
    <button @click="changeName">修改</button>
  </div>
</template>

<script>
import { ref, watchEffect,watch,reactive } from "vue";
export default {
  setup() {
   const info=reactive({name:'why',age:18})


   
    const name=ref('kobe')
    // watch(name,(newValue,oldValue)=>{
    //   console.log('new',newValue)
    // })
    watch([info,name],(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })

  const  changeName=()=>{
      name.value="coder"
    }
   return{
    info,
    changeName
   }
  }
};
</script>

<style lang="css" scoped> 
</style>
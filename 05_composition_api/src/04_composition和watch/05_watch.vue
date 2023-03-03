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


    //1.侦听watch时，传入一个getter函数
    // watch(()=>info.name,(newValue,oldValue)=>{
    //   console.log("newValue",newValue,"oldValue",oldValue);
    // })

    // 2.传入一个可响应式对象：reactive对象/ref对象
    //情况一： reactive对象获取到newValue和oldValue本身都是reactive对象
    // watch(info,(newValue,oldValue)=>{
    //   console.log("newValue",newValue)
    // })

    //如果希望newValue和oldValue是个普通对象
    // watch(()=>{
    //   return{...info}
    // },(newValue,oldValue)=>{
    //   console.log('newValue:',newValue,"oldValue",oldValue);
    // })

    // 情况二：ref对象获取newValue和oldValue是value值本身
    // const name=ref('kobe')
    // watch(name,(newValue,oldValue)=>{
    //   console.log('new',newValue)
    // })

  const  changeName=()=>{
      info.name="coder"
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
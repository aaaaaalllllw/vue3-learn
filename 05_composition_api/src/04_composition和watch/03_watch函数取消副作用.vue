<template>
  <div>
    {{name}}--{{age}}
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    //watchEffect:自动收集响应式的依赖
    const name = ref("why");
    const age = ref(18);

    const stop=watchEffect((onInvalidate)=>{
        console.log('name',name.value,"age",age.value);
        const timer=setTimeout(()=>{
          console.log("网络请求");
        },2000)

        //根据name和age两个变量发送网络请求
        onInvalidate(()=>{
          //在这个函数清除额外的副作用
          clearTimeout(timer)
          
        })
    })
    const changeName = () => (name.value = "kobe");

    const changeAge = () =>{
       age.value++;
       if(age.value>25){
        stop()
       }
    }



    return {
        name,
        age,
        changeName,
        changeAge
    };
  },
};
</script>

<style lang="css" scoped> 
</style>
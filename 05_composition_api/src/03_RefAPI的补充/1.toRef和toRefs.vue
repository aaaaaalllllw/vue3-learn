<template>
  <div>
    {{ name }}---{{ age }}
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const info = reactive({ name: "why", age: 18 });
    // 丢失响应式
    // const {name,age}=info
    // 1.toRefs:将reactive对象中所有属性转成ref，建立连接
    // let {name,age}=toRefs(info)
    // 2.toRef:对其中一个属性进行转换ref,建立连接
    let { name } = info;
    let age = toRef(info, "age");
    const changeAge = () => {
      age.value++;
      console.log(age);
    };
    return {
      age,
      name,
      changeAge,
    };
  },
};
</script>

<style scoped>
</style>
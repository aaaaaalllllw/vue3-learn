<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @afterLeave="afterLeave">
        <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
 
<script>
 

export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods:{
    beforeEnter(){
      console.log('beforeEnter')
    },
    enter(){
      console.log('enter');
    }
  }
};
</script>

<style scoped>
    .why-enter-active,
    .why-leave-active{
        animation: bounceInUp 1s ease-in;
    }
</style>
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why" @enter="enter" @leave="leave"
    :css="false">
        <h2 v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>
 
<script>
 import gasp from 'gasp'
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods:{
    enter(el,done){
      console.log('enter');
     gasp.from(el,{
      scale:0,
      x:200,
      onComplete:done
     })
    },
    leave(el,done){
      console.log('leave')
      gasp.to(el,{
        scale:0,
        x:200,
        onComplete:done
      })
    }
  }
};
</script>

<style scoped>
   
</style>
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why" mode="out-in" appear>
      <component :is="isShow?'home':'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'

export default {
  components:{
    Home,
    About
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
.why-enter-from,
    .why-leave-to{
        opacity: 0 ;
    }

    .why-enter-to,
    .why-leave-from{
        opacity: 1;
    }

    .why-enter-active,
    .why-leave-active{
        transition: opacity 2s ease;
    }

.why-enter-active
 {
  animation: bounce 2s ease;
}

.why-leave-active{
 animation: bounce 2s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
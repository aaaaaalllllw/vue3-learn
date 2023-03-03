<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="why">
      <h2 v-if="isShow">Hello World</h2>
      <h2 v-else>你好呀，李银河</h2>
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
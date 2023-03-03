<template>
  <div>
    <h3 ref="title">哈哈哈</h3>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const title=ref(null)
    return{
      title
    }
  }
};
</script>

<style lang="css" scoped> 
</style>
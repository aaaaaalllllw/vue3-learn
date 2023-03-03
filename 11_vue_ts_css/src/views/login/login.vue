<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script>
import loginPanel from './components/login-panel.vue'

export default {
  components: { loginPanel },
  name: 'login'
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>

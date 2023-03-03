<template>
  <div class="login-panel">
    <h2 class="title">后台登录系统</h2>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      :stretch="true"
      v-model="currentTab"
    >
      <el-tab-pane nam="account">
        <template #label> 账号登录 </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="Config" name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <span>手机号登录</span>
          </span> </template
        ><login-phone></login-phone
      ></el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox>记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="log-btn">
      <el-button type="primary" @click="handeLoginClick">立即登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: { loginAccount, LoginPhone },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const currentTab = ref('account')
    const handeLoginClick = () => {
      console.log('立即登录')
      accountRef.value?.loginAction(isKeepPassword.value)
    }
    return {
      isKeepPassword,
      handeLoginClick,
      accountRef,
      currentTab
    }
  }
})
</script>

<style scoped>
.login-panel {
  width: 340px;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.log-btn {
  width: 100%;
}
</style>

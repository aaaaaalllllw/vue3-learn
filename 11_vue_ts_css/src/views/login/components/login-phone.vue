<template>
  <div>
    <el-form :rules="rules">
      <el-form-item label="手机号" :model="account">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-coder">
          <el-input v-model="account.coder" />
          <el-button type="primary" class="get-btn"> 获取验证码 </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })

    return {
      account
    }
  }
})
</script>

<style scoped>
.get-coder {
  display: flex;
}
.get-btn {
  margin-left: 10px;
}
</style>

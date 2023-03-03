<template>
  <div>
    <el-form :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="name" :model="account">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
// {  rules } from '../config/account-config'
import localCache from '../../../utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const rules = {
      name: [
        { required: true, message: '用户名是必须的', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5-10个字母或者数字',
          trigger: 'blur'
        }
      ],
      password: [
        { required: true, message: '密码是必须的', trigger: 'blur' },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '密码必须是5-10个字母或者数字',
          trigger: 'blur'
        }
      ]
    }
    const account = reactive({
      name: localCache.setCache('name') ?? '',
      password: localCache.setCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    //真正登录的验证逻辑
    const loginAction = (isKeepPassword: boolean) => {
      console.log('登录')
      formRef.value?.validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log('开始记住密码')
          //1.判断是否要记住密码
          if (isKeepPassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('code', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('code')
          }
          // 2.开始进行登录验证
          store.dispatch('login/acccountLoginActtion', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>

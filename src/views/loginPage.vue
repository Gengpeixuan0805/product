<template>
  <div class="login-container">
    <template v-if="!showReset">
      <el-card class="login-card">
        <h2 class="login-title">电商购物登录</h2>
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-position="top">
          <el-form-item label="帐号" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <div style="font-size: 12px;color: blue;cursor: pointer;" @click="reset">还没有帐号？点击立即注册</div>
      </el-card>
    </template>
    <template v-else>
      <el-card class="login-card">
        <h2 class="login-title">电商购物注册</h2>
        <el-form ref="loginForm" :rules="rules" :model="loginForm" label-position="top">
          <el-form-item label="帐号" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入帐号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleRegister('loginForm')">注册</el-button>
          </el-form-item>
        </el-form>
        <div style="font-size: 12px;color: blue;cursor: pointer;" @click="login">已有帐号，返回登录！</div>
      </el-card>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

const loginForm = ref({
  username: '',
  password: ''
})

const rules = ref({
  username: [
    { required: true, message: '请输入帐号', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})

const showReset = ref(false)

const loginSubmit = (formName) => {
  loginForm.value.validate((valid) => {
    if (valid) {
      console.log('Username:', loginForm.value.username)
      console.log('Password:', loginForm.value.password)
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      console.log('userInfo===>', userInfo)
      if (userInfo) {
        const index = userInfo.findIndex(item => item.username === loginForm.value.username &&
          item.password === loginForm.value.password)
        if (index === -1) {
          return ElMessage({
            message: '用户名或密码错误',
            type: 'error'
          })
        } else {
          ElMessage({
            message: '登录成功',
            type: 'success'
          })
          sessionStorage.setItem('loginUser', JSON.stringify(userInfo[index]))
          router.push({ name: 'home', query: { username: loginForm.value.username } })
        }
      } else {
        ElMessage({
          message: '请先注册账号',
          type: 'warning'
        })
      }
    }
  })
}

const handleRegister = (formName) => {
  loginForm.value.validate((valid) => {
    if (valid) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo')) || []
      const index = userInfo.findIndex(item => item.username === loginForm.value.username)
      if (index === -1) {
        userInfo.push({
          username: loginForm.value.username,
          password: loginForm.value.password
        })
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        ElMessage({
          message: '注册成功，立即前往登录',
          type: 'success'
        })
        showReset.value = false
      } else {
        ElMessage({
          message: '用户名已存在，可前往登录',
          type: 'warning'
        })
      }
    } else {
      ElMessage({
        message: '验证失败',
        type: 'error'
      })
      return false
    }
  })
}

const reset = () => {
  showReset.value = true
  loginForm.value.username = ''
  loginForm.value.password = ''
}

const login = () => {
  showReset.value = false
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/001.png);
  background-size: 100% 100%;
}

.login-card {
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
  color: #333;
}
</style>

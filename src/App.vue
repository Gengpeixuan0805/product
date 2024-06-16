<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" style="display: flex;align-items: center;">
    <el-menu-item index="1">商品管理</el-menu-item>
    <el-menu-item index="2">我的购物车</el-menu-item>
    <el-menu-item index="3">订单管理</el-menu-item>
    <div style="color: #fff;margin-left: 55%;">
      用户：{{ username }}
    </div>
  </el-menu>
  <router-view />
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = JSON.parse(sessionStorage.getItem('loginUser'))
const username = ref(user ? user.username : 'Guest')
const activeIndex = ref('1')
const handleSelect = (key) => {
  console.log(key)
  switch (key) {
    case '1':
      router.push('/home')
      break
    case '2':
      router.push('/shoppingCart')
      break
    case '3':
      router.push('/shoppingCart')
      break
    default:
      break
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>

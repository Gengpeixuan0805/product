<template>
  <h1>我的购物车</h1>
  <div>{{ goodsList }}</div>
</template>
<script setup>
import { reactive } from 'vue'
const goodsList = reactive([
  {
    good_name: '毛衣',
    good_price: 180,
    tags: ['柔软', '舒适'],
    inputVisible: false,
    inputValue: ''
  },
  {
    good_name: '羽绒服',
    good_price: 880,
    tags: ['轻便', '舒适'],
    inputVisible: false,
    inputValue: ''
  },
  {
    good_name: '背包',
    good_price: 380,
    tags: ['简单', '耐脏'],
    inputVisible: false,
    inputValue: ''
  }
])

</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

<template>
  <h1>
    商品管理
  </h1>
  <goodsTable :tableData="goodsList" @removeGood="removeGood" />
  <addGoods @addGood="addConfirm" />
</template>
<script setup>
import goodsTable from './goodsTable.vue'
import addGoods from './addGoods.vue'
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

const removeGood = (index) => {
  goodsList.splice(index, 1)
}
const addConfirm = (newGood) => {
  goodsList.push(newGood)
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>

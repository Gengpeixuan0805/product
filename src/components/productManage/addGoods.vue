<script setup>
import { ref, reactive, defineEmits } from 'vue'
const emit = defineEmits(['addGood'])
const dialogFormVisible = ref(false)
const form = reactive({
  good_name: '',
  good_price: 0

})
const addConfirm = () => {
  const newGood = {
    good_name: form.good_name,
    good_price: form.good_price,
    tags: [],
    inputVisible: false,
    inputValue: ''
  }
  emit('addGood', newGood)
  dialogFormVisible.value = false
}
const addHandler = () => {
  dialogFormVisible.value = true
  form.good_name = ''
  form.good_price = 0
}
</script>
<template>
  <div class="main">
    <el-button @click="addHandler" style="float: right;">
      添加商品
    </el-button>
    <el-dialog v-model="dialogFormVisible" title="添加商品" width="500">
      <el-form :model="form">
        <el-form-item label="商品名称">
          <el-input v-model="form.good_name" autocomplete="off" />
        </el-form-item>

        <el-form-item label="商品价格">
          <el-input v-model="form.good_price" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addConfirm">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

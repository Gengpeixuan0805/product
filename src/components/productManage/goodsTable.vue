<template>
  <div class="main">
    <el-table :data="props.tableData" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="200" />
      <el-table-column prop="good_name" label="商品名称" width="380" />
      <el-table-column prop="good_price" label="商品价格" width="200" />
      <el-table-column label="标签" width="500">
        <template #default="scope">
          <el-input v-if="scope.row.inputVisible" v-model="scope.row.inputValue" size="small"
            @keyup.enter="saveInput(scope.row)" @blur="scope.row.inputVisible = false"
            style="width: 200px;margin-right: 5px;" />
          <el-button v-else size="small" @click="scope.row.inputVisible = true" style="margin-right: 5px;">
            + New Tag
          </el-button>
          <el-tag v-for="tag in scope.row.tags" :key="tag" closable style="margin-right: 5px;"
            :disable-transitions="false" @close="() => removeTag(scope.row.tags, tag)">
            {{ tag }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="danger" size="small" style="width: 30%" @click.prevent="deleteRow(scope.$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
const props = defineProps({
  tableData: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['removeGood'])
const deleteRow = (index) => {
  if (confirm('该操作不可恢复，请确认！')) {
    emit('removeGood', index)
  }
}
const saveInput = (row) => {
  const val = row.inputValue
  if (!val || row.tags.indexOf(val) !== -1) {
    return
  }
  row.tags.push(val)
  row.inputVisible = false
  row.inputValue = ''
}

const removeTag = (tags, tag) => {
  tags.splice(tags.indexOf(tag), 1)
}

</script>

<style scoped>
.main {
  padding: 20px;
}
</style>

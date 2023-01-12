<template>
  <Properties :name="widget.options.name">
    <el-form-item label="名称">
      <el-input v-model="name"/>
    </el-form-item>
    <el-form-item label="间距">
      <el-input-number v-model="gutter" :min="0" :step="1"/>
    </el-form-item>
    <el-form-item label="列等宽">
      <el-switch v-model="equalCols" />
    </el-form-item>
  </Properties>
</template>

<script lang="ts" setup name="grid">
import Properties from '@/components/designer/property/Properties.vue'
import { computed } from 'vue'
import { Grid } from '@/components/designer/widget/container/grid/Grid'

const props = defineProps<{
  widget: Grid
}>()

// 设置属性 //////////////////////////
const name = computed({
  get: () => props.widget.options.name,
  set: val => props.widget.options.setName(val)
})
const gutter = computed({
  get: () => props.widget.options.gutter,
  set: val => props.widget.options.setGutter(val)
})
const equalCols = computed({
  get: () => props.widget.options.equalCols,
  set: val => props.widget.options.setEqualCols(val)
})
</script>

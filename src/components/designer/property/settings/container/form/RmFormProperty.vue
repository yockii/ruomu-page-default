<template>
  <Properties :name="widget.options.name">
    <el-form-item label="名称">
      <el-input v-model="name"/>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="labelWidth"/>
    </el-form-item>
  </Properties>
</template>

<script lang="ts" setup name="rmForm">
import { RmForm } from '@/components/designer/widget/container/form/RmForm'
import { computed } from 'vue'
import Properties from '../../../Properties.vue'

const props = defineProps<{
  widget: RmForm
}>()

// 设置属性 //////////////////////////
const name = computed({
  get: () => props.widget.options.name,
  set: val => props.widget.options.setName(val)
})
const labelWidth = computed({
  get: () => props.widget.options.labelWidth,
  set: val => props.widget.options.setLabelWidth(val)
})
</script>

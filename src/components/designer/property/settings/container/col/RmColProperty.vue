<template>
  <Properties :name="widget.options.name">
    <el-form-item label="名称">
      <el-input v-model="name"/>
    </el-form-item>
    <el-form-item label="占据栅格">
      <el-input-number v-model="span" :min="1" :step="1" :max="24"/>
    </el-form-item>
    <el-form-item label="左侧间隔">
      <el-input-number v-model="offset" :min="0" :step="1" :max="24"/>
    </el-form-item>
    <el-form-item label="右移栅格">
      <el-input-number v-model="push" :min="0" :step="1" :max="24"/>
    </el-form-item>
    <el-form-item label="左移栅格">
      <el-input-number v-model="pull" :min="0" :step="1" :max="24"/>
    </el-form-item>
  </Properties>
</template>

<script lang="ts" setup name="rmCol">
import Properties from '@/components/designer/property/Properties.vue'
import { RmCol } from '@/components/designer/widget/container/rmCol/RmCol'
import { computed } from 'vue'

const props = defineProps<{
  widget: RmCol
}>()

// 设置属性 //////////////////////////
const name = computed({
  get: () => props.widget.options.name,
  set: val => props.widget.options.setName(val)
})
const span = computed({
  get: () => props.widget.options.span,
  set: val => props.widget.options.setSpan(val)
})
const offset = computed({
  get: () => props.widget.options.offset,
  set: val => props.widget.options.setOffset(val)
})
const push = computed({
  get: () => props.widget.options.push,
  set: val => props.widget.options.setPush(val)
})
const pull = computed({
  get: () => props.widget.options.pull,
  set: val => props.widget.options.setPull(val)
})

</script>

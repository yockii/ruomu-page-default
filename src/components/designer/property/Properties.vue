<template>
  <el-tabs type="border-card">
    <el-tab-pane :label="name + '属性配置'">
      <el-form label-width="80px">
        <slot></slot>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <Properties name="页面">
    <el-form-item label="页面类型">
      <el-select v-model="pageType">
        <el-option label="PC端" value="pc" />
      </el-select>
    </el-form-item>
  </Properties>
</template>
<script lang="ts" setup name="page">
import { DesignConfig } from '@/components/designer/designConfig'
import { computed } from 'vue'
import Properties from '../../Properties.vue'
const props = defineProps<{
  widget: DesignConfig
}>()

const pageType = computed({
  get: () => props.widget.options.pageType,
  set: val => props.widget.options.setPageType(val)
})

</script>

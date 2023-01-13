<template>
  <WidgetDesignWrapperVue :widget="widget" :design-config="designConfig">
    <el-row :gutter="widget?.options.gutter || 0" :justify="justify">
      <ColWidget v-for="item in widget.children" :key="item.id" :design-config="designConfig" :widget="item"></ColWidget>
      </el-row>
  </WidgetDesignWrapperVue>
  <!-- <div :ref="preview" :style="{opacity}" class="drag-box">
    <el-row :gutter="widget?.options?.gutter || 0" :justify="justify" class="ruomu-widget" :class="{selected: widget?.selected}" @click.stop="selectRow">
      <div v-if="widget.selected" :ref="drag" class="drag-handle">
        <SvgIcon icon="move"/>
      </div>
      <ColWidget v-for="item in widget.children" :key="item.id" :design-config="designConfig" :widget="item"></ColWidget>
    </el-row>
  </div> -->
</template>
<script lang="ts" setup name="grid">
import WidgetDesignWrapperVue from '../../WidgetDesignWrapper.vue'
import { useDrag } from 'vue3-dnd'
import SvgIcon from '@/components/svg-icon/index.vue'

import { computed, onMounted, toRefs } from 'vue'
import { DesignConfig } from '../../../designConfig'
import { Widget } from '../../Widget'
import ColWidget from '../col/RmCol.vue'
import { RmCol } from '../col/RmCol'
import { generateId } from '@/utils/util'
import { Grid } from './Grid'
const props = defineProps<{
  widget: Grid,
  designConfig: DesignConfig
}>()

const justify = computed(() => {
  if (props.widget?.options) {
    switch (props.widget?.options?.justify) {
      case 'end':
        return 'end'
      case 'center':
        return 'center'
      case 'space-around':
        return 'space-around'
      case 'space-between':
        return 'space-between'
      case 'space-evenly':
        return 'space-evenly'
      case 'start':
        return 'start'
    }
  }
  return 'space-around'
})

const selectRow = function () {
  props.designConfig.selectWidget(props.widget)
}

</script>

<style scoped>
</style>

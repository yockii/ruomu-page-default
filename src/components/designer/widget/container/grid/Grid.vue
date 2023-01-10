<template>
  <WidgetDesignWrapperVue :widget="widget" :design-config="designConfig">
    <el-row :gutter="widget?.options.gutter || 0" :justify="justify" class="ruomu-widget" :class="{selected: widget?.selected}" @click.stop="selectRow">
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
import { Container } from '../Container'
import ColWidget from '../col/RmCol.vue'
import { RmColProperty } from '../../../property/settings/container/col/RmColProperty'
import { RmCol } from '../col/RmCol'
const props = defineProps<{
  widget: Container,
  designConfig: DesignConfig
}>()

onMounted(() => {
  if (props.widget) {
    if (props.widget.children.length === 0) {
      setCols(2)
    }
  }
})

const setCols = (num: number) => {
  if (props.widget.children.length === num) {
    return
  }
  if (props.widget.children.length > num) {
    props.widget.removeChildren(num - 1)
  } else {
    const needCount = num - props.widget.children.length
    for (let i = 0; i < needCount; i++) {
      addCol()
    }
  }
}

const addCol = () => {
  const span = 24 / (props.widget.children.length + 1)
  props.widget.addChild(
    new RmCol({ })
  )
  props.widget.changeAllChildrenOptions({ span })
}

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

const selectCol = function (col:Widget) {
  props.designConfig.selectWidget(col)
}

</script>

<style scoped>
</style>

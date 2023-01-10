<template>
  <el-col :span="widget.options.span" :offset="widget.options.offset" :push="widget.options.push" :pull="widget.options.pull" @click.stop="selected()">
    <div class="ruomu-widget" :class="{selected: widget.selected}" >

    </div>
  </el-col>
</template>
<script lang="ts" setup name="rmCol">
import { DesignConfig } from '../../../designConfig'
import { Widget } from '../../Widget'

const props = defineProps<{
  widget: Widget,
  designConfig: DesignConfig
}>()

const selected = () => {
  props.designConfig.selectWidget(props.widget)
}
</script>

<template>
  <div class="ruomu-ui-text" :class="{ 'ruomu-ui-text--single-line': config.multiple }">
    {{ displayText }}
  </div>
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, inject, PropType } from 'vue'
import { MComponentInstance, MText, MTextInstance } from '../../../types';
import useApp from '../../../useApp';

const props = defineProps({
  config: {
    type: Object as PropType<MText>,
    default: () => ({}),
  },
  model: Object,
  vars: Object
})
useApp(props)
const vm: MTextInstance = getCurrentInstance()?.proxy as MTextInstance
const hoc: MComponentInstance = inject('hoc')
const displayText = computed(() => {
  let text = props.config?.text || ''
  if (hoc?.disabled && props.config?.disabledText) {
    text = props.config.disabledText
  }
  if (typeof text === 'function') {
    return text.bind(vm)(vm, { model: props.model })
  }
  const { vars } = props
  if (Object.prototype.toString.call(vars) === '[object Object]') {
    let tmp: string = text
    Object.entries(vars).forEach(([key, value]) => {
      tmp = tmp.replace(new RegExp(`{{${key}}}`, 'g'), value)
    })
    return tmp
  }
  return text || ''
})

</script>
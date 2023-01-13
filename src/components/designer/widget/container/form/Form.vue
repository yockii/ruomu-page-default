<template>
  <WidgetDesignWrapper :widget="widget" :design-config="designConfig">
    <el-form :label-width="widget.options.labelWidth + 'px'">
      <template v-for="item in widget.children" :key="item.id">
        <WidgetDesignWrapper :widget="item" :design-config="designConfig">
          <el-form-item :label="item.options.label">
            <component :is="getFormItem(item.type)" :widget="item" :design-config="designConfig"/>
          </el-form-item>
      </WidgetDesignWrapper>
      </template>
    </el-form>
  </WidgetDesignWrapper>
</template>

<script lang="ts" setup name="rmForm">
import formItems from '@/components/designer/widget/form/install'

import { DesignConfig } from '@/components/designer/designConfig'
import WidgetDesignWrapper from '../../WidgetDesignWrapper.vue'
import { RmForm } from './RmForm'

const props = defineProps<{
  widget: RmForm,
  designConfig: DesignConfig,
}>()

const getFormItem = (name:string) => {
  return formItems[name]
}

</script>

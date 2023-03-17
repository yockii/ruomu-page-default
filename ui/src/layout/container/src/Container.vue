<template>
  <div v-if="display()" :id="`${config.id || ''}`"
    :class="`ruomu-ui-container ruomu-layout-${config.layout}${config.className ? ` ${config.className}` : ''}`"
    :style="style" :model="model">
    <slot></slot>
    <ruomu-ui-component v-for="item in config.items" :key="item.id" :config="item"
      :model="config.bindModel ? model[config.bindModel] : model"></ruomu-ui-component>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

import type { MContainer } from '../../../types';

import Component from '../../../Component.vue';
import useApp from '../../../useApp';
import useCommonMethod from '../../../useCommonMethod';

export default defineComponent({
  components: {
    'ruomu-ui-component': Component,
  },

  props: {
    config: {
      type: Object as PropType<MContainer>,
      default: () => ({}),
    },
    model: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props) {
    const app = useApp(props);

    return {
      style: computed(() => app?.transformStyle(props.config.style || {})),

      display: () => {
        const displayCfg = props.config?.display;

        if (typeof displayCfg === 'function') {
          return displayCfg(app);
        }
        return displayCfg !== false;
      },
      ...useCommonMethod(props),
    };
  },
});
</script>

<template>
  <ruomu-ui-page :config="pageConfig" :data="data"></ruomu-ui-page>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue';

import Core from '@tmagic/core';

export default defineComponent({
  name: 'App',

  setup() {
    const app = inject<Core | undefined>('app');
    const pageConfig = reactive(app?.page?.data || {});
    const data = reactive({})
    return {
      pageConfig,
      data,
    };
  },
});
</script>

<template>
  <div :class="prefixCls">
    <template v-for="item in getProcessList" :key="item.src">
      <div :class="[`${prefixCls}-item`, item.pass && `${prefixCls}-item-pass`]">{{
        item.text
      }}</div>
    </template>
  </div>
</template>
<script lang="ts">
  import type { PropType } from 'vue';
  import { defineComponent, computed } from 'vue';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { isString } from '/@/utils/is';

  interface ProcessProps {
    text: string;
    pass: boolean;
  }

  type ProcessItem = string | ProcessProps;

  export default defineComponent({
    name: 'ProcessPreview',
    props: {
      processList: {
        type: Array as PropType<ProcessItem[]>,
      },
    },
    setup(props) {
      const { prefixCls } = useDesign('process-preview');

      const getProcessList = computed((): any[] => {
        const { processList } = props;
        if (!processList) {
          return [];
        }
        return processList.map((item) => {
          if (isString(item)) {
            return {
              text: item,
              pass: false,
            };
          }
          return item;
        });
      });

      return {
        prefixCls,
        getProcessList,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-process-preview';

  .@{prefix-cls} {
    &-item {
      display: inline-block;
      width: 50px;
      white-space: nowrap;
      border-radius: 4px;
      user-select: none;
      background-color: gray;
    }

    &-item + &-item {
      margin-left: 8px;
    }

    &-item-pass {
      background-color: green;
    }
  }
</style>

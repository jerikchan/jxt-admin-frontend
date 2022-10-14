<template>
  <Card title="快捷导航" v-bind="$attrs">
    <CardGrid v-for="item in navItems" :key="item" @click="jumpTo(item)">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="20" />
        <span class="text-md mt-2">{{ item.title }}</span>
      </span>
    </CardGrid>
  </Card>
</template>
<script lang="ts" setup>
  import { Card } from 'ant-design-vue';
  import { navItems, NavItem } from './data';
  import { Icon } from '/@/components/Icon';
  import { useRouter } from 'vue-router';

  const CardGrid = Card.Grid;
  const router = useRouter();
  const jumpTo = (item: NavItem) => {
    router.push(item.url);
  };
</script>

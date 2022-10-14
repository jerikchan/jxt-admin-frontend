<template>
  <PageWrapper title="潜在客户详情" @back="goback">
    <Description @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { customerFormSchema } from './customer.data';
  import { detailCustomer } from '/@/api/jxt/customer';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const go = useGo();
      const schema: DescItem[] = customerFormSchema.map((item) => ({
        field: item.field,
        label: item.label,
      }));
      const data: Recordable = ref({});
      const route = useRoute();
      const id = ref(route.params?.id);

      const [register, { setDescProps }] = useDescription({
        title: '潜在客户详情',
        data: unref(data),
        schema,
        column: 1,
      });

      (async () => {
        data.value = await detailCustomer({ id: unref(id) });
        setDescProps({
          data: unref(data),
          title: '潜在客户详情',
        });
      })();

      function goback() {
        go('/customer/customer');
      }

      return { schema, register, goback };
    },
  });
</script>

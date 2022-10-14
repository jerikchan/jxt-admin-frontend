<template>
  <PageWrapper title="正式学员详情">
    <Description @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { formSchema } from './data';
  import { detailStudentInfo } from '/@/api/jxt/student';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const schema: DescItem[] = formSchema.map((item) => ({
        field: item.field,
        label: item.label,
      }));
      const data: Recordable = ref({});
      const route = useRoute();
      const id = ref(route.params?.id);

      const [register, { setDescProps }] = useDescription({
        title: '正式学员详情',
        data: unref(data),
        schema,
        column: 1,
      });

      (async () => {
        data.value = await detailStudentInfo({ id: unref(id) });
        setDescProps({
          data: unref(data),
          title: data.value.name,
        });
      })();

      return { schema, register };
    },
  });
</script>

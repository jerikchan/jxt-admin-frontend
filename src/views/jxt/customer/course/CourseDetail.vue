<template>
  <PageWrapper title="招生课程详情" @back="goback">
    <Description @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { formSchema } from './course.data';
  import { detailCourse } from '/@/api/jxt/customer';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const go = useGo();
      const schema: DescItem[] = formSchema.map((item) => ({
        field: item.field,
        label: item.label,
      }));
      const data: Recordable = ref({});
      const route = useRoute();
      const id = ref(route.params?.id);

      const [register, { setDescProps }] = useDescription({
        title: '招生课程详情',
        data: unref(data),
        schema,
        column: 1,
      });

      (async () => {
        data.value = await detailCourse({ id: unref(id) });
        setDescProps({
          data: unref(data),
          title: '招生课程详情',
        });
      })();

      function goback() {
        go('/customer/course');
      }

      return { schema, register, goback };
    },
  });
</script>

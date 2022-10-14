<template>
  <PageWrapper title="考试记录详情" @back="goback">
    <Description @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { PageWrapper } from '/@/components/Page';
  import { schemas } from './exam.data';
  import { detailExamInfo } from '/@/api/jxt/exam';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    components: { Description, PageWrapper },
    setup() {
      const go = useGo();
      const schema: DescItem[] = schemas.map((item) => ({
        field: item.field,
        label: item.label,
      }));
      const data: Recordable = ref({});
      const route = useRoute();
      const id = ref(route.params?.id);

      const [register, { setDescProps }] = useDescription({
        title: '考试记录详情',
        data: unref(data),
        schema,
        column: 1,
      });

      (async () => {
        data.value = await detailExamInfo({ id: unref(id) });
        setDescProps({
          data: unref(data),
          title: '考试记录详情',
        });
      })();

      function goback() {
        go('/exam/exam');
      }

      return { schema, register, goback };
    },
  });
</script>

<template>
  <PageWrapper
    title="新增/编辑考试记录信息"
    contentBackground
    content="新增/编辑考试记录信息"
    contentClass="p-4"
    @back="goback"
  >
    <BasicForm @register="register" />
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { schemas } from './exam.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { addExamInfo, updateExamInfo, detailExamInfo } from '/@/api/jxt/exam';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'FormBasicPage',
    components: { BasicForm, PageWrapper },
    setup() {
      const { createMessage } = useMessage();
      const go = useGo();
      const route = useRoute();
      const id = ref(route.params?.id);
      const [register, { validate, setProps, setFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: schemas,
        actionColOptions: {
          offset: 8,
          span: 23,
        },
        submitButtonOptions: {
          text: '提交',
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          if (id.value && id.value !== 'undefined') {
            Object.assign(values, { id: id.value as string });
            await updateExamInfo(values);
          } else {
            await addExamInfo(values);
          }
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          createMessage.success('提交成功!');
          go('/exam/exam');
        } catch (error) {}
      }

      function goback() {
        go('/exam/exam');
      }

      async function getDetail(id) {
        if (id.value && id.value !== 'undefined') {
          const details = await detailExamInfo({ id: id.value as string });
          setFieldsValue({
            ...details,
          });
        }
      }

      getDetail(id);

      return { register, goback };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>

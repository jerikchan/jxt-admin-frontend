<template>
  <PageWrapper
    title="新增/编辑业务项目"
    contentBackground
    content="新增/编辑业务项目"
    contentClass="p-4"
    @back="goback"
  >
    <a-card title="基本信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { formSchema } from './service.project.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { addServiceInfo, detailServiceInfo, updateServiceInfo } from '/@/api/jxt/charge';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'ServiceFormManagement',
    components: { BasicForm, PageWrapper, [Card.name]: Card },
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
        schemas: formSchema,
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
            await updateServiceInfo(values);
          } else {
            await addServiceInfo(values);
          }
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          createMessage.success('提交成功!');
          go('/charge/service');
        } catch (error) {}
      }

      function goback() {
        go('/charge/service');
      }

      async function getDetail(id) {
        if (id.value && id.value !== 'undefined') {
          const details = await detailServiceInfo({ id: id.value as string });
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

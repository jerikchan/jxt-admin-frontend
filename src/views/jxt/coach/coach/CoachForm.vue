<template>
  <PageWrapper
    title="新增/编辑教练员信息"
    contentBackground
    content="新增/编辑教练员信息"
    contentClass="p-4"
    @back="goback"
  >
    <a-card title="个人信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>

    <a-card title="其他信息" :bordered="false">
      <BasicForm @register="registerFormTwo" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="customSubmitFunc"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { schemas, anotherSchema } from './coach.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { addCoachInfo, updateCoachInfo, detailCoachInfo } from '/@/api/jxt/coach';
  import { useRoute } from 'vue-router';

  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'FormBasicPage',
    components: { BasicForm, PageWrapper, [Card.name]: Card },
    setup() {
      const { createMessage } = useMessage();
      const go = useGo();
      const route = useRoute();
      const id = ref(route.params?.id);
      const [register, { validate, setFieldsValue }] = useForm({
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
        showActionButtonGroup: false,
      });

      const [registerFormTwo, { validate: validateTwo, setFieldsValue: setFieldsValueTwo }] =
        useForm({
          labelCol: {
            span: 8,
          },
          wrapperCol: {
            span: 15,
          },
          schemas: anotherSchema,
          showActionButtonGroup: false,
        });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          const valuesTwo = await validateTwo();
          if (id.value && id.value !== 'undefined') {
            Object.assign(values, { id: id.value as string });
            Object.assign(values, valuesTwo);
            await updateCoachInfo(values);
          } else {
            await addCoachInfo(values);
          }
          createMessage.success('提交成功!');
          go('/coach/coach');
        } catch (error) {}
      }

      function goback() {
        go('/coach/coach');
      }

      async function getDetail(id) {
        if (id.value && id.value !== 'undefined') {
          const details = await detailCoachInfo({ id: id.value as string });
          setFieldsValue({
            ...details,
          });
          setFieldsValueTwo({
            ...details,
          });
        }
      }

      getDetail(id);

      return { register, registerFormTwo, goback, customSubmitFunc };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>

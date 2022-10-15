<template>
  <PageWrapper
    title="新增/编辑收费记录"
    contentBackground
    content="新增/编辑收费记录"
    contentClass="p-4"
    @back="goback"
  >
    <BasicForm @register="register" v-if="flag" />
    <StudentChargeTable ref="chargeTable" />
    <template #rightFooter>
      <a-button type="primary" @click="customSubmitFunc"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref, unref } from 'vue';
  import { formSchema } from './charge.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import {
    // addChargeInfo,
    // detailCHarge,
    // updateChargeInfo,
    addChargeInfoList,
  } from '/@/api/jxt/charge';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';
  import StudentChargeTable from '/@/views/jxt/student/student/StudentChargeTable.vue';

  export default defineComponent({
    name: 'FormBasicPage',
    components: { BasicForm, PageWrapper, StudentChargeTable },
    setup() {
      const { createMessage } = useMessage();
      const go = useGo();
      const route = useRoute();
      const id = ref(route.params?.id);
      const flag = ref(false);
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
        submitFunc: customSubmitFunc2,
      });
      const chargeTable = ref(null);

      async function customSubmitFunc2() {
        try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          if (id.value && id.value !== 'undefined') {
            Object.assign(values, { id: id.value as string });
            await updateChargeInfo(values);
          } else {
            await addChargeInfo(values);
          }
          setProps({
            submitButtonOptions: {
              loading: false,
            },
          });
          createMessage.success('提交成功!');
          go('/charge/charge');
        } catch (error) {}
      }
      async function customSubmitFunc() {
        try {
          const data = chargeTable.value.getDataSource();
          const list = data.map((item) => {
            return item.editValueRefs;
          });
          debugger;
          await addChargeInfoList({ list, studentId: unref(id) });
        } catch (error) {
          console.error(error);
        }
      }

      function goback() {
        go('/charge/charge');
      }

      async function getDetail(id) {
        if (id.value && id.value !== 'undefined') {
          const details = await detailCHarge({ id: id.value as string });
          setFieldsValue({
            ...details,
          });
        }
      }

      if (flag.value) {
        getDetail(id);
      }

      return { register, goback, chargeTable, customSubmitFunc, flag };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>

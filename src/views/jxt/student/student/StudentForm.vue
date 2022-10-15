<template>
  <PageWrapper
    title="新增/编辑正式学员信息"
    contentBackground
    content="新增/编辑正式学员信息"
    contentClass="p-4"
    @back="goback"
  >
    <a-card title="个人信息" :bordered="false">
      <BasicForm @register="register" />
    </a-card>

    <a-card title="学籍招生信息" :bordered="false">
      <BasicForm @register="registerFormTwo" />
    </a-card>

    <a-card title="收费记录" :bordered="false">
      <StudentChargeTable ref="tableRef" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="customSubmitFunc"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { formSchema, formSchemaTwo } from './data';
  import StudentChargeTable from './StudentChargeTable.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { addStudentInfo, updateStudentInfo, detailStudentInfo } from '/@/api/jxt/student';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRoute } from 'vue-router';

  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'StudentOperForm',
    components: { BasicForm, StudentChargeTable, PageWrapper, [Card.name]: Card },
    setup() {
      const { createMessage } = useMessage();
      const go = useGo();
      const route = useRoute();
      const id = ref(route.params?.id);
      const tableRef = ref<{ getDataSource: () => any } | null>(null);
      const [register, { validate, setFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: formSchema,
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
          schemas: formSchemaTwo,
          showActionButtonGroup: false,
        });

      async function customSubmitFunc() {
        try {
          const values = await validate();
          const valuesTwo = await validateTwo();
          if (tableRef.value) {
            console.log('table data:', tableRef.value.getDataSource());
          }
          if (id.value && id.value !== 'undefined') {
            Object.assign(values, { id: id.value as string });
            Object.assign(values, valuesTwo);
            await updateStudentInfo(values);
          } else {
            Object.assign(values, valuesTwo);
            await addStudentInfo(values);
          }
          createMessage.success('提交成功!');
          go('/student/student');
        } catch (error) {}
      }

      function goback() {
        go('/student/student');
      }

      async function getDetail(id) {
        if (id.value && id.value !== 'undefined') {
          const details = await detailStudentInfo({ id: id.value as string });
          setFieldsValue({
            ...details,
          });
          setFieldsValueTwo({
            ...details,
          });
        }
      }

      getDetail(id);

      return { register, registerFormTwo, goback, customSubmitFunc, tableRef };
    },
  });
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>

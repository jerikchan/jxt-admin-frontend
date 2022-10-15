<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handlerOper"> 新增收费记录 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handlerOper.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RoleDrawer @register="registerDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getChargeListByPage, deleteChargeInfo } from '/@/api/jxt/charge';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './charge.data';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'AreaManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer] = useDrawer();
      const { createMessage } = useMessage();
      const go = useGo();
      const [registerTable, { reload, getForm }] = useTable({
        title: '收费记录列表',
        api: getChargeListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: 'right',
        },
      });

      function handlerOper() {
        const formRef = getForm();
        const value = formRef.getFieldsValue();
        go('/charge/charge_oper/' + value.studentId);
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        try {
          await deleteChargeInfo({ id: record.id });
          createMessage.success('删除成功！');
          reload();
        } catch (error) {}
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerDrawer,
        handlerOper,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

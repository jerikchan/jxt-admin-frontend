<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handlerOper"> 新增学员 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看详情',
                onClick: handleView.bind(null, record),
              },
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
  import { getCustomerListByPage, deleteCustomer } from '/@/api/jxt/customer';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { columns, searchFormSchema } from './customer.data';

  export default defineComponent({
    name: 'AreaManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer] = useDrawer();
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { reload }] = useTable({
        title: '潜在学员列表',
        api: getCustomerListByPage,
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
          width: 200,
          title: '操作',
          dataIndex: 'action',
          fixed: 'right',
        },
      });

      function handlerOper(record: Recordable) {
        go('/customer/customer_oper/' + record.id);
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        try {
          await deleteCustomer({ id: record.id });
          createMessage.success('删除成功!');
        } catch (error) {
          console.error(error);
          createMessage.success('删除失败!');
        }
        reload();
      }

      function handleSuccess() {
        reload();
      }

      function handleView(record: Recordable) {
        go('/customer/customer_detail/' + record.id);
      }

      return {
        registerTable,
        registerDrawer,
        handlerOper,
        handleView,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

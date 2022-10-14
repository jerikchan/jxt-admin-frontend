<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handlerOper"> 新增教练员 </a-button>
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
  import { getCoachListByPage, deleteCoachInfo } from '/@/api/jxt/coach';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './coach.data';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'AreaManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer] = useDrawer();
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { reload }] = useTable({
        title: '教练员列表',
        api: getCoachListByPage,
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
          width: 100,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handlerOper(record: Recordable) {
        go('/coach/coach_oper/' + record.id);
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        try {
          await deleteCoachInfo({ id: record.id });
          createMessage.success('删除成功!');
        } catch (error) {
          console.error(error);
          createMessage.error('删除失败!');
        }
        reload();
      }

      function handleView(record: Recordable) {
        go('/coach/coach_detail/' + record.id);
      }

      function handleSuccess() {
        reload();
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

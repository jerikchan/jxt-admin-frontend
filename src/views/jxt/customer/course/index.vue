<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handlerOper"> 新增招生课程 </a-button>
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
  import { getCourseListByPage, deleteCourse } from '/@/api/jxt/customer';

  import { useDrawer } from '/@/components/Drawer';
  import RoleDrawer from './RoleDrawer.vue';

  import { columns, searchFormSchema } from './course.data';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'CourseManagement',
    components: { BasicTable, RoleDrawer, TableAction },
    setup() {
      const [registerDrawer] = useDrawer();
      const { createMessage } = useMessage();
      const go = useGo();
      const [registerTable, { reload }] = useTable({
        title: '招生课程列表',
        api: getCourseListByPage,
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
          width: 80,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function handlerOper(record: Recordable) {
        go('/customer/customer_course_oper/' + record.id);
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        try {
          await deleteCourse({ id: record.id });
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

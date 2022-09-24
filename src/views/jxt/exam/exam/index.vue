<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handlerOper"> 新增考试记录 </a-button>
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
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getExamListByPage, deleteExamInfo } from '/@/api/jxt/exam';

  import { columns, searchFormSchema } from './exam.data';

  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    name: 'ExamTableList',
    components: { BasicTable, TableAction },
    setup() {
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { reload }] = useTable({
        title: '考试记录列表',
        api: getExamListByPage,
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
        go('/exam/exam_oper/' + record.id);
      }

      async function handleDelete(record: Recordable) {
        console.log(record);
        try {
          await deleteExamInfo({ id: record.id });
          createMessage.success('删除成功!');
        } catch (error) {
          console.error(error);
          createMessage.error('删除失败!');
        }
        reload();
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handlerOper,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

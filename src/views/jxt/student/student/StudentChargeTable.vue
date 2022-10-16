<template>
  <div>
    <BasicTable @register="registerTable" @edit-change="handleEditChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="createActions(record, column)" />
        </template>
      </template>
    </BasicTable>
    <a-button block class="mt-5" type="dashed" @click="handleAdd"> 新增收费记录 </a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { getChargeTypeList, getPayMethodTypeList } from '/@/api/jxt/dic';
  import {
    BasicTable,
    useTable,
    TableAction,
    BasicColumn,
    ActionItem,
    EditRecordRow,
  } from '/@/components/Table';
  import { useRoute } from 'vue-router';
  import { getChargeListByStudent } from '/@/api/jxt/charge';

  const columns: BasicColumn[] = [
    {
      title: '收费类型',
      dataIndex: 'chargeType',
      editRow: true,
      editComponent: 'ApiSelect',
      editComponentProps: {
        api: getChargeTypeList,
        resultField: 'list',
        labelField: 'label',
        valueField: 'label',
      },
    },
    {
      title: '业务项目',
      dataIndex: 'serviceProject',
      editRow: true,
    },
    {
      title: '收费金额',
      dataIndex: 'chargeAmount',
      editRow: true,
    },
    {
      title: '优惠金额',
      dataIndex: 'discountAmount',
      editRow: true,
    },
    // {
    //   title: '代收代支款',
    //   dataIndex: 'dept',
    //   editRow: true,
    // },
    // {
    //   title: '预收款',
    //   dataIndex: 'dept',
    //   editRow: true,
    // },
    {
      title: '实收款',
      dataIndex: 'realAmount',
      editRow: true,
    },
    {
      title: '收款编码',
      dataIndex: 'chargeCode',
      editRow: true,
    },
    {
      title: '收费方式',
      dataIndex: 'paymentMethod',
      editRow: true,
      editComponent: 'ApiSelect',
      editComponentProps: {
        api: getPayMethodTypeList,
        resultField: 'list',
        labelField: 'label',
        valueField: 'value',
      },
    },
    // {
    //   title: '收费状态',
    //   dataIndex: 'dept',
    //   editRow: true,
    // },
    {
      title: '收费日期',
      dataIndex: 'chargeDate',
      editRow: true,
    },
    // {
    //   title: '录入日期',
    //   dataIndex: 'dept',
    //   editRow: false,
    // },
    // {
    //   title: '录入人',
    //   dataIndex: 'dept',
    //   editRow: false,
    // },
    {
      title: '收费人',
      dataIndex: 'chargeManId',
      editRow: true,
    },
    {
      title: '审核状态',
      dataIndex: 'status',
      editRow: false,
    },
    // {
    //   title: '审核时间',
    //   dataIndex: 'dept',
    //   editRow: false,
    // },
    // {
    //   title: '审核人',
    //   dataIndex: 'dept',
    //   editRow: false,
    // },
    {
      title: '发票号',
      dataIndex: 'invoiceNumber',
      editRow: true,
    },
    {
      title: '发票金额',
      dataIndex: 'invoiceAmount',
      editRow: false,
    },
  ];

  // const data: any[] = [];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const route = useRoute();
      const id = ref(route.params?.id);
      const [registerTable, { getDataSource }] = useTable({
        columns: columns,
        showIndexColumn: false,
        // dataSource: data,
        api: getChargeListByStudent.bind(null, { studentId: unref(id) }),
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
        pagination: false,
      });

      function handleEdit(record: EditRecordRow) {
        record.onEdit?.(true);
      }

      function handleCancel(record: EditRecordRow) {
        record.onEdit?.(false);
        if (record.isNew) {
          handleDelete(record);
        }
      }

      function handleSave(record: EditRecordRow) {
        record.onEdit?.(false, true);
      }

      function handleEditChange(data: Recordable) {
        console.log(data);
      }

      function handleDelete(record: EditRecordRow) {
        const data = getDataSource();
        const index = data.findIndex((item) => item.key === record.key);
        data.splice(index, 1);
      }

      function handleAdd() {
        const data = getDataSource();
        const addRow: EditRecordRow = {
          // name: '',
          // no: '',
          // dept: '',
          editable: true,
          isNew: true,
          key: `${Date.now()}`,
        };
        data.push(addRow);
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
            },
            ...(!record.id
              ? [
                  {
                    label: '删除',
                    onClick: handleDelete.bind(null, record),
                  },
                ]
              : []),
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      return {
        registerTable,
        handleEdit,
        createActions,
        handleAdd,
        getDataSource,
        handleEditChange,
      };
    },
  });
</script>

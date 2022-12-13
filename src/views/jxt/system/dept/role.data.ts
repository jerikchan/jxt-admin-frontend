import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';
import { getAccountList, getDeptList } from '/@/api/jxt/system';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '负责人',
    dataIndex: 'leader',
    width: 180,
  },
  {
    title: '部门手机',
    dataIndex: 'phone',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '已启用',
        unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          setRoleStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改部门状态`);
            })
            .catch(() => {
              createMessage.error('修改部门状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'roleNme',
    label: '部门名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '部门名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'leaderId',
    label: '负责人',
    component: 'ApiSelect',
    colProps: { span: 12 },
    componentProps: {
      // more details see /src/components/Form/src/components/ApiSelect.vue
      api: getAccountList,
      showSearch: true,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
      immediate: false,
    },
  },
  {
    field: 'parentId',
    label: '上级部门',
    component: 'ApiTreeSelect',
    colProps: { span: 12 },
    componentProps: {
      api: getDeptList,
      resultField: 'result',
      fieldNames: {
        label: 'name',
        value: 'id',
      },
    },
  },
  {
    field: 'phone',
    label: '部门手机',
    required: false,
    component: 'Input',
  },
];

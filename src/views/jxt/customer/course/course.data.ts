import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: '课程名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 150,
  },
  {
    title: '分班数量',
    dataIndex: '',
    width: 150,
  },
  {
    title: '在学人数',
    dataIndex: '',
    width: 150,
  },
  {
    title: '阶段数量',
    dataIndex: '',
    width: 150,
  },
  {
    title: '累计毕业',
    dataIndex: '',
    width: 150,
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
              createMessage.success(`已成功修改角色状态`);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'roleNme',
    label: '角色名称',
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
    label: '课程名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'price',
    label: '课程报价',
    required: true,
    component: 'Input',
  },
  {
    field: 'period',
    label: '自动充值学时数',
    required: true,
    component: 'Input',
  },
  {
    field: 'period',
    label: '自动充值学时数',
    required: true,
    component: 'Input',
  },
  {
    field: 'courseFeature',
    label: '课程卖点',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'privateIntroduction',
    label: '内部说明',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'courseDetail',
    label: '课程详情内容',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'notice',
    label: '报名须知',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'faq',
    label: '常见问题',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'courseType',
    label: '常见问题',
    required: false,
    component: 'Input',
  },
  {
    field: 'paymentArrays',
    label: '支付方式',
    required: false,
    component: 'InputTextArea',
  },
  {
    field: 'status',
    label: '课程状态',
    required: false,
    component: 'Input',
  },
  {
    field: 'remark',
    label: '备注',
    required: false,
    component: 'InputTextArea',
  },
];

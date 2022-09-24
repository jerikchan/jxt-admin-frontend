import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

const colProps = {
  span: 8,
};

export const columns: BasicColumn[] = [
  {
    title: '学员姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '标签',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '所属分部',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '报名日期',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '电话',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '第一证件号',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '证件地址',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '车型',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '进度',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '课程',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '学员编号',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '教练',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '未收费用',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '是否潜在客户转正',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '所属训练场',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '受理号',
    dataIndex: 'orderNo',
    width: 150,
  },
  {
    title: '受理时间',
    dataIndex: 'orderNo',
    width: 150,
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
    label: '学员名称',
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
    label: '学员名称',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'remark',
    label: '备注',
    component: 'InputTextArea',
    colProps,
    componentProps: {
      placeholder: '',
      rows: 4,
    },
  },
];

import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

const colProps = {
  span: 8,
};

export const columns: BasicColumn[] = [
  {
    title: '教练姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '所属分部',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 200,
  },
  {
    title: '在岗状态',
    dataIndex: 'statusStr',
    width: 100,
  },
  {
    title: '教练类型',
    dataIndex: 'coachType',
    width: 100,
  },
  {
    title: '业务类型',
    dataIndex: 'serviceType',
    width: 100,
  },
  {
    title: '所属训练场',
    dataIndex: 'mobile',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '教练姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: '手机号',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'roleName',
    label: '角色名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '角色值',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    label: ' ',
    field: 'menu',
    slot: 'menu',
    component: 'Input',
  },
];

const basicOptions: LabelValueOptions = [
  {
    label: '付晓晓',
    value: '1',
  },
  {
    label: '周毛毛',
    value: '2',
  },
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: '私密',
    value: '1',
  },
  {
    label: '公开',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '姓名',
    colProps,
    componentProps: {
      placeholder: '请输入姓名',
    },
    required: true,
  },
  {
    field: 'mobile',
    component: 'Input',
    label: '手机号码',
    colProps,
    componentProps: {
      placeholder: '请输入手机号码',
    },
    required: true,
  },
  {
    field: 'sex',
    component: 'Input',
    label: '性别',
    colProps,
    required: false,
  },
  {
    field: 'sex',
    component: 'Input',
    label: '性别',
    colProps,
    required: false,
  },
  {
    field: 'wechat',
    component: 'Input',
    label: '微信号',
    colProps,
    required: false,
  },
  {
    field: 'address',
    component: 'Input',
    label: '联系地址',
    colProps,
    required: false,
  },
  {
    field: 'coachName',
    component: 'Input',
    label: '吸烟',
    colProps,
    required: false,
  },
  {
    field: 'hobby',
    component: 'InputTextArea',
    label: '教练爱好',
    colProps,
    componentProps: {
      placeholder: '',
      rows: 4,
    },
    required: false,
  },
  {
    field: 'hobby',
    component: 'InputTextArea',
    label: '教练寄语',
    colProps,
    componentProps: {
      placeholder: '',
      rows: 4,
    },
    required: false,
  },
  {
    field: 'hobby',
    component: 'InputTextArea',
    label: '教练方言',
    colProps,
    componentProps: {
      placeholder: '',
      rows: 4,
    },
    required: false,
  },
];
export const otherSchema: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: '任务名',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: '任务描述',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: '执行人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: '责任人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: '生效日期',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: '任务类型',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];

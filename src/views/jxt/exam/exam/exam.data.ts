import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

import { h } from 'vue';

import { Image } from 'ant-design-vue';

const colProps = {
  span: 8,
};

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '联系方式',
    dataIndex: 'mobile',
    width: 200,
  },
  {
    title: '成绩图',
    dataIndex: 'preview',
    width: 150,
    customRender: ({ record }) => {
      return h(Image, {
        src: record.preview || '/src/assets/images/logo.png',
        width: 60,
        height: 60,
      });
    },
  },
  {
    title: '学习驾驶证明',
    dataIndex: 'serialNumber',
    width: 180,
  },
  {
    title: '身份证号码',
    dataIndex: 'idNumber',
    width: 180,
  },
  {
    title: '考试科目',
    dataIndex: 'examType',
    width: 200,
  },
  {
    title: '报考车型',
    dataIndex: 'examCarType',
    width: 200,
  },
  {
    title: '业务类型',
    dataIndex: 'serviceType',
    width: 200,
  },
  {
    title: '考试日期',
    dataIndex: 'examTime',
    width: 200,
  },
  {
    title: '预约次数',
    dataIndex: 'examNumbers',
    width: 200,
  },
  {
    title: '考试地点',
    dataIndex: 'examAddress',
    width: 200,
  },
  {
    title: '成绩',
    dataIndex: 'fraction',
    width: 200,
  },
  {
    title: '考试记录状态',
    dataIndex: 'status',
    width: 200,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '标签名',
    component: 'Input',
    colProps: { span: 3 },
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
    label: '联系方式',
    colProps,
    componentProps: {
      placeholder: '请输入联系方式',
    },
    required: true,
  },
  {
    field: 'examType',
    component: 'Input',
    label: '考试科目',
    colProps,
    required: true,
  },
  {
    field: 'examCarType',
    component: 'Input',
    label: '报考车型',
    colProps,
    required: false,
  },
  {
    field: 'serviceType',
    component: 'Input',
    label: '业务类型',
    colProps,
    required: false,
  },
  {
    field: 'examTime',
    component: 'Input',
    label: '考试时间',
    colProps,
    required: false,
  },
  {
    field: 'examAddress',
    component: 'Input',
    label: '考试地点',
    colProps,
    required: false,
  },
  {
    field: 'fraction',
    component: 'Input',
    label: '成绩',
    colProps,
    required: false,
  },
  {
    field: 'status',
    component: 'Input',
    label: '考试记录状态',
    colProps,
    required: false,
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '备注',
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

export const fastImportSchema: FormSchema[] = [
  {
    field: 'data',
    component: 'InputTextArea',
    componentProps: {
      autoSize: { minRows: 8 },
    },
    label: '',
    required: true,
  },
];

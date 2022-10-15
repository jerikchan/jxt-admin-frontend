import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

import {
  getCoachServiceTypeList,
  getCountryProLevelList,
  getServiceModeList,
  getWorkStautsList,
} from '/@/api/jxt/dic';

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
    label: '性别',
    required: false,
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '男',
          value: 0,
        },
        {
          label: '女',
          value: 1,
        },
      ],
    },
    colProps,
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
    field: 'smokeOrNot',
    label: '是否吸烟',
    required: false,
    component: 'RadioGroup',
    defaultValue: '否',
    componentProps: {
      options: [
        {
          label: '否',
          value: '否',
        },
        {
          label: '是',
          value: '是',
        },
      ],
    },
    colProps,
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

export const anotherSchema: FormSchema[] = [
  {
    field: '所属分部',
    component: 'ApiSelect',
    label: '所属分部',
    colProps,
    componentProps: {},
    required: true,
  },
  {
    field: '所属机构',
    component: 'ApiSelect',
    label: '所属机构',
    colProps,
    componentProps: {},
    required: true,
  },
  {
    field: 'jiaolianzhenghao',
    component: 'Input',
    label: '教练证号',
    colProps,
    required: false,
  },
  {
    field: 'jiaolianzhenghao',
    component: 'Input',
    label: '驾驶证号',
    colProps,
    required: false,
  },
  {
    field: 'jiaolianzhenghao',
    component: 'DatePicker',
    label: '教练证有效期',
    colProps,
    required: false,
  },
  {
    field: 'guojiazhiyedengji',
    label: '国家职业等级',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCountryProLevelList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
  {
    field: 'shanggangshijian',
    component: 'DatePicker',
    label: '上岗时间',
    colProps,
    required: false,
  },
  {
    field: 'jiaolianleixing',
    label: '教练类型',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getServiceModeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
  {
    field: 'jiaolianleixing',
    label: '在岗状态',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getWorkStautsList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
  {
    field: 'yewuleixing',
    label: '业务类型',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCoachServiceTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
  {
    field: 'jiaoxuenianling',
    component: 'Input',
    label: '教学年龄',
    colProps,
    required: false,
  },
  {
    field: 'jiaoxuenianling',
    component: 'Input',
    label: '所属训练场',
    colProps,
    required: false,
  },
  {
    field: '教学经验',
    component: 'InputTextArea',
    label: '教学经验',
    colProps,
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

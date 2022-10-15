import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

import { getSourceDicList, getCourseDicList } from '/@/api/jxt/customer';
import { getCoachDicList } from '/@/api/jxt/coach';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
  },
  {
    title: '电话号码',
    dataIndex: 'mobile',
    width: 200,
  },
  {
    title: '学员类型',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: '跟进提醒日期',
    dataIndex: 'orderNo',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 100,
  },
  {
    title: '介绍人',
    dataIndex: 'introductionName',
    width: 100,
  },
  {
    title: '来源',
    dataIndex: 'customerSource',
    width: 100,
  },
  {
    title: '意向课程',
    dataIndex: 'purposeCourse',
    width: 100,
  },
  {
    title: '跟进人',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '录入时间',
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
    field: 'name',
    label: '姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: '联系电话',
    // component: 'Input',
    // componentProps: {
    //   options: [
    //     { label: '启用', value: '0' },
    //     { label: '停用', value: '1' },
    //   ],
    // },
    // colProps: { span: 8 },
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'followManName',
    label: '跟进人',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'introductionName',
    label: '介绍人',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'customerSource',
    label: '来源',
    component: 'ApiSelect',
    componentProps: {
      api: getSourceDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
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

const colProps = {
  span: 8,
};

export const customerFormSchema: FormSchema[] = [
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
    field: 'source',
    label: '来源',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getSourceDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
  },
  {
    field: 'sex',
    label: '性别',
    colProps,
    required: false,
    component: 'RadioGroup',
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
  },
  {
    field: 'purposeCourse',
    label: '意向课程',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCourseDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
  },
  {
    field: 'introductionName',
    component: 'Input',
    label: '介绍人',
    colProps,
    required: false,
  },
  {
    field: 'coachName',
    label: '教练员',
    colProps,
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCoachDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
  },
  // {
  //   field: 'time',
  //   component: 'RangePicker',
  //   label: '起止日期',
  //   colProps,
  //   required: true,
  // },
  // {
  //   field: 'client',
  //   component: 'Input',
  //   colProps,
  //   label: '客户',
  //   helpMessage: '目标的服务对象',
  //   subLabel: '( 选填 )',
  //   componentProps: {
  //     placeholder: '请描述你服务的客户，内部客户直接 @姓名／工号',
  //   },
  // },
  // {
  //   field: 'weights',
  //   component: 'InputNumber',
  //   label: '权重',
  //   colProps,
  //   subLabel: '( 选填 )',
  //   componentProps: {
  //     formatter: (value: string) => (value ? `${value}%` : ''),
  //     parser: (value: string) => value.replace('%', ''),
  //     placeholder: '请输入',
  //   },
  // },
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
  // {
  //   field: 'metrics',
  //   component: 'InputTextArea',
  //   label: '衡量标准',
  //   colProps,
  //   componentProps: {
  //     placeholder: '请输入衡量标准',
  //     rows: 4,
  //   },
  //   required: true,
  // },

  // {
  //   field: 'inviteer',
  //   component: 'Input',
  //   label: '邀评人',
  //   colProps: {
  //     span: 8,
  //   },
  //   subLabel: '( 选填 )',
  //   componentProps: {
  //     placeholder: '请直接 @姓名／工号，最多可邀请 5 人',
  //   },
  // },
  // {
  //   field: 'disclosure',
  //   component: 'RadioGroup',
  //   label: '目标公开',
  //   colProps: {
  //     span: 16,
  //   },
  //   itemProps: {
  //     extra: '客户、邀评人默认被分享',
  //   },
  //   componentProps: {
  //     options: [
  //       {
  //         label: '公开',
  //         value: '1',
  //       },
  //       {
  //         label: '部分公开',
  //         value: '2',
  //       },
  //       {
  //         label: '不公开',
  //         value: '3',
  //       },
  //     ],
  //   },
  // },
  // {
  //   field: 'disclosure',
  //   component: 'Select',
  //   label: ' ',
  //   colProps: {
  //     span: 8,
  //   },
  //   show: ({ model }) => {
  //     return model.disclosure === '2';
  //   },
  //   componentProps: {
  //     placeholder: '公开给',
  //     mode: 'multiple',
  //     options: [
  //       {
  //         label: '同事1',
  //         value: '1',
  //       },
  //       {
  //         label: '同事2',
  //         value: '2',
  //       },
  //       {
  //         label: '同事3',
  //         value: '3',
  //       },
  //     ],
  //   },
  // },
];

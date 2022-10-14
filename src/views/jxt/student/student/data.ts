import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { ProcessPreview } from '/@/components/ProcessPreview';
import { h } from 'vue';

import { getStudentLabelDicList } from '/@/api/jxt/student';

const colProps = {
  span: 24,
};

const basicOptions: LabelValueOptions = [
  {
    label: '男',
    value: '0',
  },
  {
    label: '女',
    value: '1',
  },
];

export const columns: BasicColumn[] = [
  {
    title: '学员姓名',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '联系方式',
    dataIndex: 'mobile',
    width: 200,
  },
  {
    title: '标签',
    dataIndex: 'label',
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
    title: '考试进度',
    dataIndex: 'process',
    width: 250,
    customRender: ({ record }) => {
      return h(ProcessPreview, {
        processList: record.processList || [
          {
            text: '科目一',
            pass: true,
          },
          {
            text: '科目二',
            pass: true,
          },
          {
            text: '科目三',
            pass: false,
          },
          {
            text: '科目四',
            pass: false,
          },
        ],
      });
    },
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
    field: 'mobile',
    label: '联系方式',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'sex',
    label: '性别',
    required: false,
    component: 'Select',
    componentProps: {
      options: basicOptions,
    },
    colProps,
  },
  {
    field: 'email',
    label: '邮箱',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'nationality',
    label: '国籍',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'wechat',
    label: '微信号',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'papersType',
    label: '证件类型',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'label',
    label: '学员标签',
    component: 'ApiSelect',
    componentProps: {
      api: getStudentLabelDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
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

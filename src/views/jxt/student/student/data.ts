import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { ProcessPreview } from '/@/components/ProcessPreview';
import { h } from 'vue';

import { getStudentLabelDicList } from '/@/api/jxt/student';
import { getCourseDicList } from '/@/api/jxt/customer';
import { getCoachDicList } from '/@/api/jxt/coach';
import {
  getPaperTypeList,
  getSecondPaperTypeList,
  getExamModelList,
  getServiceModeList,
  getShenqingList,
  getExamCarTypeList,
} from '/@/api/jxt/dic';

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
    field: 'birthday',
    label: '生日',
    required: false,
    component: 'DatePicker',
    colProps,
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
    field: 'email',
    label: '邮箱',
    required: false,
    component: 'Input',
    colProps,
    suffix: '.com',
  },
  {
    field: 'jiguan',
    label: '籍贯',
    required: true,
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '本地',
          value: 0,
        },
        {
          label: '外地',
          value: 1,
        },
      ],
    },
    colProps,
  },
  {
    field: 'shili',
    label: '视力',
    required: false,
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: '良好',
          value: 0,
        },
        {
          label: '近视',
          value: 1,
        },
      ],
    },
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
    field: 'yzbh',
    label: '邮政编号',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'youjidizhi',
    label: '邮寄地址',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'zhengjianguoqiriqi',
    label: '证件过期日期',
    required: false,
    component: 'DatePicker',
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
    field: 'zhunkaozhenghao',
    label: '准考证号',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'papersType',
    label: '证件类型',
    required: true,
    component: 'ApiSelect',
    componentProps: {
      api: getPaperTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'zhengjianbianhao',
    label: '证件编号',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'zhengjiandizhi',
    label: '证件地址',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'SecondPaperType',
    label: '第二证件类型',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getSecondPaperTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'dierzhengjianhaoma',
    label: '第二证件号码',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'dierzhengjiandizhi',
    label: '第二证件地址',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'dierzhengjianguoqiriqi',
    label: '第二证件过期日期',
    required: false,
    component: 'DatePicker',
    colProps,
  },
  {
    field: 'shengao',
    label: '身高',
    required: false,
    component: 'Input',
    colProps,
    suffix: 'cm',
  },
  {
    field: 'shifouqitajiaxiaobaoguoming',
    label: '是否其他驾校报过名',
    required: false,
    component: 'RadioGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        {
          label: '否',
          value: 1,
        },
        {
          label: '是',
          value: 0,
        },
      ],
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

export const formSchemaTwo: FormSchema[] = [
  {
    field: 'serviceType',
    label: '业务模式',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getServiceModeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '报考模式',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getExamModelList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '申请类型',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getShenqingList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '课程',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCourseDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '报考车型',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getExamCarTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '原准驾车型',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getExamCarTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'baokaomoshi',
    label: '教练员',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getCoachDicList,
      labelField: 'name',
      valueField: 'name',
      disabled: false,
    },
    colProps,
  },
  {
    field: 'dierzhengjianguoqiriqi',
    label: '报名日期',
    required: false,
    component: 'DatePicker',
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
    field: 'dierzhengjianguoqiriqi',
    label: '受理号',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'dierzhengjianguoqiriqi',
    label: '所属分部',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'dierzhengjianguoqiriqi',
    label: '所属训练场',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'dierzhengjianguoqiriqi',
    label: '所属机构',
    required: false,
    component: 'Input',
    colProps,
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

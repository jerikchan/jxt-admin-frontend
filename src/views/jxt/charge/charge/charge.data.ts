import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'studentName',
    width: 200,
  },
  {
    title: '课程',
    dataIndex: 'purposeCourse',
    width: 180,
  },
  {
    title: '班级',
    dataIndex: 'orderNo',
    width: 180,
  },
  {
    title: '当前阶段',
    dataIndex: 'jieduan',
    width: 180,
  },
  {
    title: '收费类型',
    dataIndex: 'chargeType',
    width: 180,
  },
  {
    title: '业务项目',
    dataIndex: 'serviceProject',
    width: 180,
  },
  {
    title: '收费分部',
    dataIndex: 'temp',
    width: 180,
  },
  {
    title: '教练员',
    dataIndex: 'coachName',
    width: 180,
  },
  {
    title: '费用',
    dataIndex: 'chargeAmount',
    width: 180,
  },
  {
    title: '优惠金额',
    dataIndex: 'discountAmount',
    width: 180,
  },
  {
    title: '实收款',
    dataIndex: 'realAmount',
    width: 180,
  },
  {
    title: '收款编码',
    dataIndex: 'chargeCode',
    width: 180,
  },
  {
    title: '收费方式',
    dataIndex: 'paymentMethod',
    width: 180,
  },
  {
    title: '收费人姓名',
    dataIndex: 'chargeManName',
    width: 180,
  },
  {
    title: '收费日期',
    dataIndex: 'chargeDate',
    width: 180,
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    width: 180,
  },
  {
    title: '发票号',
    dataIndex: 'invoiceNumber',
    width: 180,
  },
  {
    title: '发票金额',
    dataIndex: 'invoiceAmount',
    width: 180,
  },
  {
    title: '录入人',
    dataIndex: 'createName',
    width: 180,
  },
  {
    title: '录入日期',
    dataIndex: 'createDate',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'studentName',
    label: '姓名',
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

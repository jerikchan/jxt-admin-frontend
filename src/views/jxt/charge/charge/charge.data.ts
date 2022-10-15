import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { getStudentList } from '/@/api/jxt/student';

import { MobileOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';

const colProps = {
  span: 8,
};

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
    field: 'studentId',
    label: '学员姓名',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getStudentList,
      showSearch: true,
      resultField: 'items',
      labelField: 'name',
      valueField: 'id',
      immediate: false,
    },
    renderComponentContent: () => {
      return {
        option: (args) => {
          return h(
            'div',
            {
              style: 'display: flex; justify-content: space-between;',
            },
            [
              h('div', { style: 'width: 33%' }, args.label || '账号'),
              h('div', { style: 'width: 33%' }, [h(MobileOutlined), args.mobile || '电话号码']),
            ],
          );
        },
      };
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'studentName',
    label: '学员名称',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeType',
    label: '收费类型',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'serviceProject',
    label: '业务项目',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeAmount',
    label: '收费金额',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'discountAmount',
    label: '优惠金额',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'realAmount',
    label: '实收款',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeCode',
    label: '收款编码',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'paymentMethod',
    label: '收费方式',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeManName',
    label: '收费人',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeDate',
    label: '收费日期',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'invoiceNumber',
    label: '发票号',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'invoiceAmount',
    label: '发票金额',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeIntroduction',
    label: '收费说明',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'remark',
    label: '备注',
    required: true,
    component: 'Input',
    colProps,
  },
];

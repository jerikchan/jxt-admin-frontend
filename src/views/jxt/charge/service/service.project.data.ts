import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

import { getChargeTypeList } from '/@/api/jxt/dic';

const colProps = {
  span: 8,
};

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '收费金额',
    dataIndex: 'chargeAmount',
    width: 180,
  },
  {
    title: '代收代支款',
    dataIndex: 'preAndGiveAmount',
    width: 180,
  },
  {
    title: '预收款',
    dataIndex: 'preAmount',
    width: 180,
  },
  {
    title: '收费类型',
    dataIndex: 'chargeType',
    width: 180,
  },
  {
    title: '添加时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '录入人',
    dataIndex: 'createName',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'chargeType',
    label: '收费类型',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getChargeTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'chargeType',
    label: '收费类型',
    component: 'ApiSelect',
    colProps: { span: 8 },
    componentProps: {
      api: getChargeTypeList,
      labelField: 'label',
      valueField: 'value',
      disabled: false,
    },
  },
  {
    field: 'chargeAmount',
    label: '收费金额',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'preAndGiveAmount',
    label: '代收代支款',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'preAmount',
    label: '预收款',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'remark',
    label: '备注',
    required: true,
    component: 'InputTextArea',
    colProps,
  },
];

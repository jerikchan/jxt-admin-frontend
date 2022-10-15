import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

import { getReciveOrNotTypeList } from '/@/api/jxt/dic';

const colProps = {
  span: 8,
};

export const columns: BasicColumn[] = [
  {
    title: '分部名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '分部地址',
    dataIndex: 'address',
    width: 180,
  },
  {
    title: '是否接送',
    dataIndex: 'receiveOrNot',
    width: 180,
  },
  {
    title: '分部电话',
    dataIndex: 'phone',
    width: 180,
  },
  {
    title: '设立时间',
    dataIndex: 'useTime',
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分部名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '联系电话',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '分部名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'phone',
    label: '联系电话',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'address',
    label: '分部地址',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'receiveOrNot',
    label: '是否接送',
    required: false,
    component: 'ApiSelect',
    componentProps: {
      api: getReciveOrNotTypeList,
      labelField: 'label',
      valueField: 'value',
    },
    colProps,
  },
  {
    field: 'useTime',
    label: '设立时间',
    component: 'DatePicker',
    colProps: { span: 8 },
  },
  {
    field: 'accountName',
    label: '转账姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'yinhangzhuanhang',
    label: '银行账号',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'yinhang',
    label: '银行',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'zhihang',
    label: '支行',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'zhihang',
    label: '支行',
    component: 'InputTextArea',
    colProps: { span: 8 },
  },
];

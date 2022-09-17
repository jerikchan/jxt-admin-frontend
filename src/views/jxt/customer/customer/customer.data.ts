import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Switch } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'roleName',
    width: 100,
  },
  {
    title: '录入时间',
    dataIndex: 'roleValue',
    width: 180,
  },
  {
    title: '跟进提醒日期',
    dataIndex: 'orderNo',
    width: 200,
  },
  {
    title: '状态',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '介绍人',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '来源',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '意向课程',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '跟进人',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    customRender: ({ record }) => {
      if (!Reflect.has(record, 'pendingStatus')) {
        record.pendingStatus = false;
      }
      return h(Switch, {
        checked: record.status === '1',
        checkedChildren: '已启用',
        unCheckedChildren: '已禁用',
        loading: record.pendingStatus,
        onChange(checked: boolean) {
          record.pendingStatus = true;
          const newStatus = checked ? '1' : '0';
          const { createMessage } = useMessage();
          setRoleStatus(record.id, newStatus)
            .then(() => {
              record.status = newStatus;
              createMessage.success(`已成功修改角色状态`);
            })
            .catch(() => {
              createMessage.error('修改角色状态失败');
            })
            .finally(() => {
              record.pendingStatus = false;
            });
        },
      });
    },
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
    label: '角色名称',
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
    component: 'Input',
    label: '来源',
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
    field: 'sex',
    component: 'Input',
    label: '性别',
    colProps,
    required: false,
  },
  {
    field: 'purposeCourse',
    component: 'Input',
    label: '意向课程',
    colProps,
    required: false,
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
    component: 'Input',
    label: '教练员',
    colProps,
    required: false,
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
    required: true,
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

import { isAccountExist } from '/@/api/demo/system';
import { getAccountList } from '/@/api/jxt/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { MobileOutlined } from '@ant-design/icons-vue';

export const columns: BasicColumn[] = [
  {
    title: '账户账号',
    dataIndex: 'code',
    width: 120,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '账户账号',
    component: 'ApiSelect',
    colProps: { span: 12 },
    componentProps: {
      // more details see /src/components/Form/src/components/ApiSelect.vue
      api: getAccountList,
      showSearch: true,
      resultField: 'items',
      labelField: 'code',
      valueField: 'code',
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
              h('div', { style: 'width: 33%' }, [h(MobileOutlined), args.name || '名称']),
              h('div', { style: 'width: 33%' }, [h(MobileOutlined), args.mobile || '电话号码']),
            ],
          );
        },
      };
    },
  },
  {
    field: 'name',
    label: '名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '用户账号',
    component: 'Input',
    required: true,
    ifShow: true,
  },
  {
    field: 'name',
    label: '用户名',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || '验证失败');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pwd',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: true,
  },
  // {
  //   label: '角色',
  //   field: 'role',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     api: getAllRoleList,
  //     labelField: 'roleName',
  //     valueField: 'roleValue',
  //   },
  //   required: true,
  // },
  // {
  //   field: 'dept',
  //   label: '所属部门',
  //   component: 'TreeSelect',
  //   componentProps: {
  //     fieldNames: {
  //       label: 'deptName',
  //       key: 'id',
  //       value: 'id',
  //     },
  //     getPopupContainer: () => document.body,
  //   },
  //   required: true,
  // },
  // {
  //   field: 'name',
  //   label: '名称',
  //   component: 'Input',
  //   required: true,
  // },

  // {
  //   label: '邮箱',
  //   field: 'email',
  //   component: 'Input',
  //   required: true,
  // },

  // {
  //   label: '备注',
  //   field: 'remark',
  //   component: 'InputTextArea',
  // },
];

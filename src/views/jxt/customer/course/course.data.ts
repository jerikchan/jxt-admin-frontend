import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { ProcessPreview } from '/@/components/ProcessPreview';
import { h } from 'vue';
import { Switch, Image } from 'ant-design-vue';
import { setRoleStatus } from '/@/api/demo/system';
import { useMessage } from '/@/hooks/web/useMessage';
import { uploadApi } from '/@/api/sys/upload';
import { Tinymce } from '/@/components/Tinymce/index';

const colProps = {
  span: 18,
};

export const columns: BasicColumn[] = [
  {
    title: '课程名称',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 150,
  },
  {
    title: '课程图',
    dataIndex: 'preview',
    width: 150,
    customRender: ({ record }) => {
      return h(Image, {
        src: record.preview || '/src/assets/images/logo.png',
        width: 60,
        height: 60,
      });
    },
  },
  {
    title: '课程进度',
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
    title: '分班数量',
    dataIndex: '',
    width: 150,
  },
  {
    title: '在学人数',
    dataIndex: '',
    width: 150,
  },
  {
    title: '阶段数量',
    dataIndex: '',
    width: 150,
  },
  {
    title: '累计毕业',
    dataIndex: '',
    width: 150,
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
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '课程名称',
    component: 'Input',
    colProps: { span: 3 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '课程名称',
    required: true,
    component: 'Input',
    colProps,
  },
  {
    field: 'price',
    label: '课程报价',
    required: true,
    component: 'Input',
    colProps,
    suffix: '元',
  },
  {
    field: 'period',
    label: '自动充值学时数',
    required: true,
    component: 'Input',
    colProps,
    suffix: '小时',
  },
  {
    field: 'preview',
    label: '课程图',
    component: 'Upload',
    colProps,
    componentProps: {
      api: uploadApi,
    },
  },
  {
    field: 'courseFeature',
    label: '课程卖点',
    required: false,
    component: 'InputTextArea',
    colProps,
  },
  {
    field: 'privateIntroduction',
    label: '内部说明',
    required: false,
    component: 'InputTextArea',
    colProps,
  },
  {
    field: 'courseDetail',
    label: '课程详情内容',
    required: false,
    component: 'InputTextArea',
    colProps,
  },
  {
    field: 'courseDetail',
    component: 'Input',
    label: '课程详情内容',
    defaultValue: '',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    field: 'notice',
    label: '报名须知',
    required: false,
    component: 'InputTextArea',
    colProps,
  },
  {
    field: 'faq',
    label: '常见问题',
    required: false,
    component: 'InputTextArea',
    colProps,
  },
  {
    field: 'courseType',
    label: '常见问题',
    required: false,
    component: 'Input',
    colProps,
  },
  {
    field: 'paymentArrays',
    label: '支付方式',
    required: false,
    colProps,
    component: 'InputTextArea',
  },
  {
    field: 'status',
    label: '课程状态',
    required: false,
    colProps,
    component: 'Input',
  },
  {
    field: 'remark',
    label: '备注',
    required: false,
    colProps,
    component: 'InputTextArea',
  },
];

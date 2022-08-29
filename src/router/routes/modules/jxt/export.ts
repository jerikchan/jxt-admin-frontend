import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/export',
  name: 'export',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '导出管理',
    requiresAuth: true,
    icon: 'icon-check-circle',
    order: 2,
  },
  children: [
    {
      path: 'export-list', // The midline path complies with SEO specifications
      name: 'ExportList',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '导出列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

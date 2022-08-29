import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/spend',
  name: 'spend',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '支出管理',
    requiresAuth: true,
    icon: 'icon-check-circle',
    order: 2,
  },
  children: [
    {
      path: 'spend-list', // The midline path complies with SEO specifications
      name: 'SpendList',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '支出列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

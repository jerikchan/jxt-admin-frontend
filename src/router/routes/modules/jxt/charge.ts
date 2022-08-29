import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/charge',
  name: 'charge',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '收费管理',
    requiresAuth: true,
    icon: 'icon-file',
    order: 2,
  },
  children: [
    {
      path: 'charge-record', // The midline path complies with SEO specifications
      name: 'chargeRecord',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '收费记录',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'business-project', // The midline path complies with SEO specifications
      name: 'BusinessProject',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '业务项目',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

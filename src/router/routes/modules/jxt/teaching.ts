import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/teaching',
  name: 'teaching',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '教学管理',
    requiresAuth: true,
    icon: 'icon-exclamation-circle',
    order: 2,
  },
  children: [
    {
      path: 'teaching-journal', // The midline path complies with SEO specifications
      name: 'TeachingJournal',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '教学日志',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

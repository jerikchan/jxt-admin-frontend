import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/coach',
  name: 'coach',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '教练员管理',
    requiresAuth: true,
    icon: 'icon-user',
    order: 2,
  },
  children: [
    {
      path: 'coach-list', // The midline path complies with SEO specifications
      name: 'CoachList',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '教练列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-evaluation', // The midline path complies with SEO specifications
      name: 'StudentEvaluation',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '学员评价',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

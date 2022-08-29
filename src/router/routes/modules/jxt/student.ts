import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/student',
  name: 'student',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '学员管理',
    requiresAuth: true,
    icon: 'icon-settings',
    order: 2,
  },
  children: [
    {
      path: 'student-list', // The midline path complies with SEO specifications
      name: 'StudentList',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '学员列表',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-statistics', // The midline path complies with SEO specifications
      name: 'StudentStatistics',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '在学统计',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-complaint', // The midline path complies with SEO specifications
      name: 'StudentComplaint',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '学员投诉',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-tag', // The midline path complies with SEO specifications
      name: 'StudentTag',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '学员标签',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/student',
  name: 'Student',
  component: LAYOUT,
  redirect: '/student/student',
  meta: {
    title: '学员管理',
    requiresAuth: true,
    icon: 'fe:activity',
    order: 2,
  },
  children: [
    {
      path: 'student', // The midline path complies with SEO specifications
      name: 'StudentList',
      component: () => import('/@/views/jxt/student/index.vue'),
      meta: {
        title: '学员列表',
        requiresAuth: true,
      },
    },
    {
      path: 'student-statistics', // The midline path complies with SEO specifications
      name: 'StudentStatistics',
      component: () => import('/@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        title: '在学统计',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-complaint', // The midline path complies with SEO specifications
      name: 'StudentComplaint',
      component: () => import('/@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        title: '学员投诉',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'student-tag', // The midline path complies with SEO specifications
      name: 'StudentTag',
      component: () => import('/@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        title: '学员标签',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

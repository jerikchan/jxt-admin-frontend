import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/exam',
  name: 'Exam',
  component: LAYOUT,
  redirect: '/exam/exam',
  meta: {
    title: '考试管理',
    requiresAuth: true,
    icon: 'fe:activity',
    order: 2,
  },
  children: [
    {
      path: 'exam', // The midline path complies with SEO specifications
      name: 'examList',
      component: () => import('/@/views/jxt/customer/customer/index.vue'),
      meta: {
        title: '考试记录列表',
        requiresAuth: true,
      },
    },
    {
      path: 'student-statistics', // The midline path complies with SEO specifications
      name: 'StudentStatistics',
      component: () => import('/@/views/jxt/customer/customer/index.vue'),
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
      component: () => import('/@/views/jxt/customer/customer/index.vue'),
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
      component: () => import('/@/views/jxt/customer/customer/index.vue'),
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
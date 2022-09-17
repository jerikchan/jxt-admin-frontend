import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/customer',
  name: 'Customer',
  component: LAYOUT,
  redirect: '/customer/customer',
  meta: {
    title: '招生管理',
    requiresAuth: true,
    icon: 'ion:check-circle',
    order: 2,
  },
  children: [
    {
      path: 'customer', // The midline path complies with SEO specifications
      name: 'CustomerList',
      component: () => import('/@/views/jxt/customer/customer/index.vue'),
      meta: {
        title: '招生列表',
        requiresAuth: true,
      },
    },
    {
      path: 'source', // The midline path complies with SEO specifications
      name: 'SourceList',
      component: () => import('/@/views/jxt/customer/source/index.vue'),
      meta: {
        title: '招生渠道',
        requiresAuth: true,
      },
    },
    {
      path: 'course', // The midline path complies with SEO specifications
      name: 'CourseList',
      component: () => import('/@/views/jxt/customer/course/index.vue'),
      meta: {
        title: '招生课程',
        requiresAuth: true,
      },
    },
  ],
};

export default LIST;

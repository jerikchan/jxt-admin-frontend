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
    icon: 'ic:baseline-account-box',
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
      path: 'customer_oper/:id',
      name: 'CustomerOper',
      meta: {
        title: '新增/编辑潜在学员',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/customer/customer',
      },
      component: () => import('/@/views/jxt/customer/customer/CustomerForm.vue'),
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
      path: 'customer_source_oper/:id',
      name: 'CustomerSourceOper',
      meta: {
        title: '新增/编辑招生渠道',
        ignoreKeepAlive: true,
        hideMenu: true,
        hideTab: true,
        currentActiveMenu: '/customer/source',
      },
      component: () => import('/@/views/jxt/customer/source/CustomerSourceForm.vue'),
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
    {
      path: 'customer_course_oper/:id',
      name: 'CustomerCourseOper',
      meta: {
        title: '新增/编辑招生课程',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/customer/course',
      },
      component: () => import('/@/views/jxt/customer/course/CourseForm.vue'),
    },
  ],
};

export default LIST;

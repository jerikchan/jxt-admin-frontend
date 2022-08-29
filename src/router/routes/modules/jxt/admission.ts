import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/admission',
  name: 'Admission',
  component: LAYOUT,
  redirect: '/admission/admission-list',
  meta: {
    title: '招生管理',
    requiresAuth: true,
    icon: 'ion:check-circle',
    order: 2,
  },
  children: [
    {
      path: 'admission-list', // The midline path complies with SEO specifications
      name: 'AdmissionList',
      component: () => import('/@/views/demo/system/account/index.vue'),
      meta: {
        title: '招生列表',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    {
      path: 'admission-channel', // The midline path complies with SEO specifications
      name: 'AdmissionChannel',
      component: () => import('/@/views/demo/system/account/index.vue'),
      meta: {
        title: '招生渠道',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    {
      path: 'admission-stage', // The midline path complies with SEO specifications
      name: 'AdmissionStage',
      component: () => import('/@/views/demo/system/account/index.vue'),
      meta: {
        title: '阶段管理',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    {
      path: 'admission-statistics', // The midline path complies with SEO specifications
      name: 'AdmissionStatistics',
      component: () => import('/@/views/demo/system/account/index.vue'),
      meta: {
        title: '招生统计',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    {
      path: 'admission-lesson', // The midline path complies with SEO specifications
      name: 'AdmissionLesson',
      component: () => import('/@/views/demo/system/account/index.vue'),
      meta: {
        title: '招生课程',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
  ],
};

export default LIST;

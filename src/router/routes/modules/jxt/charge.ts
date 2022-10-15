import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/charge',
  name: 'charge',
  component: LAYOUT,
  redirect: '/charge/charge',
  meta: {
    title: '收费管理',
    requiresAuth: true,
    icon: 'ic:twotone-text-snippet',
    order: 2,
  },
  children: [
    {
      path: 'charge', // The midline path complies with SEO specifications
      name: 'ChargeList',
      component: () => import('/@/views/jxt/charge/charge/index.vue'),
      meta: {
        title: '收费记录',
        requiresAuth: true,
      },
    },
    {
      path: 'charge_oper/:id',
      name: 'ChargeOper',
      meta: {
        title: '新增/编辑收费记录',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/charge/charge',
      },
      component: () => import('/@/views/jxt/charge/charge/ChargeForm.vue'),
    },
    {
      path: 'service', // The midline path complies with SEO specifications
      name: 'ServiceList',
      component: () => import('/@/views/jxt/charge/service/index.vue'),
      meta: {
        title: '业务项目',
        requiresAuth: true,
      },
    },
    {
      path: 'service_oper/:id',
      name: 'ServiceOper',
      meta: {
        title: '新增/编辑业务记录',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/charge/service',
      },
      component: () => import('/@/views/jxt/charge/service/ServiceForm.vue'),
    },
  ],
};

export default LIST;

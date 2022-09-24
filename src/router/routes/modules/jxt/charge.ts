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
    // {
    //   path: 'business-project', // The midline path complies with SEO specifications
    //   name: 'BusinessProject',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     label: '业务项目',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
  ],
};

export default LIST;

import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/coach',
  name: 'coach',
  component: LAYOUT,
  redirect: '/coach/coach',
  meta: {
    title: '教练员管理',
    requiresAuth: true,
    icon: 'icon-user',
    order: 2,
  },
  children: [
    {
      path: 'coach', // The midline path complies with SEO specifications
      name: 'CoachList',
      component: () => import('/@/views/jxt/coach/coach/index.vue'),
      meta: {
        title: '教练列表',
        requiresAuth: true,
      },
    },
    {
      path: 'coach_oper/:id',
      name: 'CoachOper',
      meta: {
        title: '新增/编辑教练员信息',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/coach/coach',
      },
      component: () => import('/@/views/admin/beo/order/BeoOrderModal.vue'),
    },
    // {
    //   path: 'student-evaluation', // The midline path complies with SEO specifications
    //   name: 'StudentEvaluation',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     label: '学员评价',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
  ],
};

export default LIST;

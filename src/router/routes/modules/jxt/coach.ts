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
    icon: 'ic:baseline-admin-panel-settings',
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
      component: () => import('/@/views/jxt/coach/coach/CoachForm.vue'),
    },
  ],
};

export default LIST;

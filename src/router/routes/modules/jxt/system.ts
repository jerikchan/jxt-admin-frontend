import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/system',
  name: 'system',
  component: LAYOUT,
  redirect: '/system/user-management',
  meta: {
    title: '系统管理',
    requiresAuth: true,
    icon: 'ion:settings-outline',
    order: 90,
  },
  children: [
    {
      path: 'user', // The midline path complies with SEO specifications
      name: 'UserManagement',
      component: () => import('/@/views/jxt/system/user/index.vue'),
      meta: {
        title: '用户管理',
        requiresAuth: true,
      },
    },
    {
      path: 'dept', // The midline path complies with SEO specifications
      name: 'DeptManagement',
      component: () => import('/@/views/jxt/system/dept/index.vue'),
      meta: {
        title: '部门管理',
        requiresAuth: true,
      },
    },
    {
      path: 'role', // The midline path complies with SEO specifications
      name: 'RoleManagement',
      component: () => import('/@/views/jxt/system/role/index.vue'),
      meta: {
        title: '角色管理',
        requiresAuth: true,
      },
    },
    {
      path: 'area', // The midline path complies with SEO specifications
      name: 'AreaManagement',
      component: () => import('/@/views/jxt/system/area/index.vue'),
      meta: {
        title: '场所管理',
        requiresAuth: true,
      },
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: '员工详情',
        hideTab: true,
        showMenu: false,
        currentActiveMenu: '/system/account',
      },
      component: () => import('/@/views/jxt/system/user/AccountDetail.vue'),
    },
    {
      path: 'parcel', // The midline path complies with SEO specifications
      name: 'ParcelManagement',
      component: () => import('/@/views/jxt/system/parcel/index.vue'),
      meta: {
        title: '分部管理',
        requiresAuth: true,
      },
    },
    {
      path: 'parcel_oper/:id',
      name: 'ParcelOper',
      meta: {
        title: '新增/编辑分部',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/exam/exam',
      },
      component: () => import('/@/views/jxt/system/parcel/ParcelForm.vue'),
    },
    {
      path: 'auth', // The midline path complies with SEO specifications
      name: 'AuthManagement',
      component: () => import('/@/views/jxt/system/auth/index.vue'),
      meta: {
        title: '权限管理',
        requiresAuth: true,
      },
    },
  ],
};

export default LIST;

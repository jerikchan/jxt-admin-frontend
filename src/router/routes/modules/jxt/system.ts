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
    icon: 'icon-check-circle',
    order: 90,
  },
  children: [
    {
      path: 'user-management', // The midline path complies with SEO specifications
      name: 'UserManagement',
      component: () => import('/@/views/jxt/system/user-management/index.vue'),
      meta: {
        title: '用户管理',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    {
      path: 'role-management', // The midline path complies with SEO specifications
      name: 'RoleManagement',
      component: () => import('/@/views/jxt/system/role-management/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        title: '角色管理',
        requiresAuth: true,
        // roles: ['*'],
      },
    },
    // {
    //   path: 'plaza-management', // The midline path complies with SEO specifications
    //   name: 'PlazaManagement',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     title: '场所管理',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'division-management', // The midline path complies with SEO specifications
    //   name: 'DivisionManagement',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     title: '分部管理',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'institution-management', // The midline path complies with SEO specifications
    //   name: 'InstitutionManagement',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     title: '机构管理',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'authManagement', // The midline path complies with SEO specifications
    //   name: 'AuthManagement',
    //   component: () => import('@/views/list/search-table/index.vue'),
    //   meta: {
    //     // locale: 'menu.list.searchTable',
    //     title: '权限管理',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
  ],
};

export default LIST;

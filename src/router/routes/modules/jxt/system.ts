import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/system',
  name: 'system',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '系统管理',
    requiresAuth: true,
    icon: 'icon-check-circle',
    order: 90,
  },
  children: [
    {
      path: 'user-management', // The midline path complies with SEO specifications
      name: 'UserManagement',
      component: () => import('@/views/system/user-management/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '用户管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'role-management', // The midline path complies with SEO specifications
      name: 'RoleManagement',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '角色管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'plaza-management', // The midline path complies with SEO specifications
      name: 'PlazaManagement',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '场所管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'division-management', // The midline path complies with SEO specifications
      name: 'DivisionManagement',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '分部管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'institution-management', // The midline path complies with SEO specifications
      name: 'InstitutionManagement',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '机构管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'authManagement', // The midline path complies with SEO specifications
      name: 'AuthManagement',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '权限管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

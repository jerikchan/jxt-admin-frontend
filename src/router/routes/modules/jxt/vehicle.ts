import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
  path: '/vehicle',
  name: 'vehicle',
  component: DEFAULT_LAYOUT,
  meta: {
    // locale: 'menu.list',
    label: '车辆管理',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: 'vehicle-file', // The midline path complies with SEO specifications
      name: 'VehicleFile',
      component: () => import('@/views/list/search-table/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        label: '车辆档案',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default LIST;

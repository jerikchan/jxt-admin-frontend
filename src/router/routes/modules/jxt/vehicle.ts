import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/vehicle',
  name: 'vehicle',
  component: LAYOUT,
  meta: {
    // locale: 'menu.list',
    title: '车辆档案管理',
    requiresAuth: true,
    icon: 'ic:twotone-toys',
    order: 2,
  },
  children: [
    {
      path: 'vehicle-file', // The midline path complies with SEO specifications
      name: 'VehicleFile',
      component: () => import('/@/views/jxt/car/index.vue'),
      meta: {
        // locale: 'menu.list.searchTable',
        title: '车辆档案',
        requiresAuth: true,
      },
    },
  ],
};

export default LIST;

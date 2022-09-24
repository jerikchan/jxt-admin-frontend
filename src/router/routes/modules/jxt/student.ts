import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/student',
  name: 'Student',
  component: LAYOUT,
  redirect: '/student/student',
  meta: {
    title: '学员管理',
    requiresAuth: true,
    icon: 'ic:baseline-account-circle',
    order: 2,
  },
  children: [
    {
      path: 'student', // The midline path complies with SEO specifications
      name: 'StudentList',
      component: () => import('/@/views/jxt/student/student/index.vue'),
      meta: {
        title: '学员列表',
        requiresAuth: true,
      },
    },
    {
      path: 'student_oper/:id',
      name: 'StudentOper',
      meta: {
        title: '新增/编辑正式学员信息',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/student/student',
      },
      component: () => import('/@/views/jxt/student/student/StudentForm.vue'),
    },
  ],
};

export default LIST;

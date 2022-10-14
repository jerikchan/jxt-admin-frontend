import { LAYOUT } from '/@/router/constant';
import type { AppRouteModule } from '/@/router/types';

const LIST: AppRouteModule = {
  path: '/exam',
  name: 'Exam',
  component: LAYOUT,
  redirect: '/exam/exam',
  meta: {
    title: '考试管理',
    requiresAuth: true,
    icon: 'fe:activity',
    order: 2,
  },
  children: [
    {
      path: 'exam', // The midline path complies with SEO specifications
      name: 'examList',
      component: () => import('/@/views/jxt/exam/exam/index.vue'),
      meta: {
        title: '考试记录列表',
        requiresAuth: true,
      },
    },
    {
      path: 'exam_oper/:id',
      name: 'ExamOper',
      meta: {
        title: '新增/编辑考试记录',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/exam/exam',
      },
      component: () => import('/@/views/jxt/exam/exam/ExamForm.vue'),
    },
    {
      path: 'exam_detail/:id',
      name: 'ExamDetail',
      meta: {
        title: '考试记录详情',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/exam/exam',
      },
      component: () => import('/@/views/jxt/exam/exam/ExamDetail.vue'),
    },
  ],
};

export default LIST;

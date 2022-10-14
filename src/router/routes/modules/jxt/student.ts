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
    {
      path: 'student_detail/:id',
      name: 'StudentDetail',
      meta: {
        title: '正式学员详情',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/student/student',
      },
      component: () => import('/@/views/jxt/student/student/StudentDetail.vue'),
    },
    {
      path: 'student_exam_oper/:id',
      name: 'StudentExamOper',
      meta: {
        title: '录入学员考试信息',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/student/student',
      },
      component: () => import('/@/views/jxt/student/student/StudentExamForm.vue'),
    },
    {
      path: 'label', // The midline path complies with SEO specifications
      name: 'StudentLabelList',
      component: () => import('/@/views/jxt/student/label/index.vue'),
      meta: {
        title: '学员标签',
        requiresAuth: true,
      },
    },
    {
      path: 'student_label_detail/:id',
      name: 'StudentLabelDetail',
      meta: {
        title: '学员标签详情',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/student/label',
      },
      component: () => import('/@/views/jxt/student/label/StudentLabelDetail.vue'),
    },
    {
      path: 'label_oper/:id',
      name: 'StudentLabelOper',
      meta: {
        title: '新增/编辑学员标签',
        ignoreKeepAlive: true,
        hideMenu: true,
        showMenu: false,
        hideTab: true,
        currentActiveMenu: '/student/label',
      },
      component: () => import('/@/views/jxt/student/label/LabelForm.vue'),
    },
  ],
};

export default LIST;

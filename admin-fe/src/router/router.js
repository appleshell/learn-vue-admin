import Vue from 'vue'
import Router from 'vue-router'
import Vuetest from './modules/vueTest'
import Homeindex from '../views/Home.vue'

Vue.use(Router)

const Login = () => import('@/views/login/login.vue')
const Home = () => import('@/views/home/index.vue')
const StudentTable = () => import('@/views/studentTable/studentTable.vue')
const CourseTale = () => import('@/views/courses/courseTable.vue')
const ClassSchedult = () => import('@/views/courses/classSchedule')

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/homeindex',
      menu: true,
      children: [
        {
          path: '/',
          name: 'homeindex',
          component: Homeindex,
          menu: true,
          meta: {
            title: '首页',
            icon: '',
            breadcrumb: '首页'
          }
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: Home,
      // redirect: '/homeindex',
      menu: true,
      meta: {
        title: '测试首',
        icon: '',
        breadcrumb: '测试首'
      },
      children: [
        {
          path: '/test1',
          name: 'homeindex1',
          component: Homeindex,
          menu: true,
          meta: {
            title: '测试',
            icon: '',
            breadcrumb: '测试'
          },
          children: [
            {
              path: '/test2',
              name: 'homeindex2',
              component: Homeindex,
              menu: true,
              meta: {
                title: '测试2',
                icon: '',
                breadcrumb: '测试2'
              }
            }
          ]
        }
      ]
    },
    {
      path: '/student',
      name: 'student',
      component: Home,
      redirect: '/student/grade1',
      menu: true,
      meta: {
        title: '我的学生',
        breadcrumb: '我的学生'
      },
      children: [
        {
          path: 'grade1',
          name: 'grade1',
          component: StudentTable,
          menu: true,
          meta: {
            title: '高一',
            icon: '',
            breadcrumb: '高一'
          }
        },
        {
          path: 'grade2',
          name: 'grade2',
          component: StudentTable,
          menu: true,
          meta: {
            title: '高二',
            icon: '',
            breadcrumb: '高二'
          },
        },
        {
          path: 'grade3',
          name: 'grade3',
          component: StudentTable,
          menu: true,
          meta: {
            title: '高三',
            icon: '',
            breadcrumb: '高三'
          },
        }
      ]
    },
    {
      path: '/course',
      name: 'course',
      component: Home,
      menu: true,
      meta: {
        title: '我的课程',
        breadcrumb: '我的课程'
      },
      children: [
        {
          path: 'classSchedult',
          name: 'classSchedult',
          component: ClassSchedult,
          menu: true,
          meta: {
            title: '课程表',
            icon: '',
            breadcrumb: '课程表'
          }
        },
        {
          path: 'course1',
          name: 'course1',
          component: CourseTale,
          menu: true,
          meta: {
            title: '1班课程',
            icon: '',
            breadcrumb: '1班课程'
          }
        },
        {
          path: 'course2',
          name: 'course2',
          component: CourseTale,
          menu: true,
          meta: {
            title: '2班课程',
            icon: '',
            breadcrumb: '2班课程'
          }
        }
      ]
    },
    ...Vuetest
  ]
})

const Home = () => import ('@/views/home/index')

export default [{
  path: '/vuetest',
  name: 'vueTest',
  component: Home,
  menu: true,
  meta: {
    title: '测试demo',
    icon: '',
    breadcrumb: '测试demo'
  },
  children: [
    {
      path: 'dynamicComponent',
      name: 'dynamicComponent',
      component: () => import('@/views/vueTest/dynamicComponent/studentTable'),
      menu: true,
      meta: {
        title: '动态组件',
        icon: '',
        breadcrumb: '动态组件'
      }
    },
    {
      path: 'renderTest',
      name: 'renderTest',
      component: () => import ('@/views/vueTest/render/index'),
      menu: true,
      meta: {
        title: 'render函数',
        icon: '',
        breadcrumb: 'render函数'
      }
    },{
      path: 'zmTabs',
      name: 'zmTabs',
      component: () => import ('@/views/vueTest/zmComponent/tabs'),
      menu: true,
      meta: {
        title: 'tabs',
        icon: '',
        breadcrumb: 'tabs'
      }
    },{
      path: 'attrAndListener',
      name: 'attrAndListener',
      component: () => import ('@/views/vueTest/$attr$listener/index'),
      menu: true,
      meta: {
        title: 'attrAndListener',
        icon: '',
        breadcrumb: 'attrAndListener'
      }
    }
  ]
}];

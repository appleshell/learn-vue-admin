import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementUI from 'element-ui'

import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import 'fullcalendar/dist/fullcalendar.css'

import './permission'
Vue.use(ElementUI,{size:'small'});

Vue.config.productionTip = false
console.log('process',process.env)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

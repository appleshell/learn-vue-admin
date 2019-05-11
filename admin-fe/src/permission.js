import router from '@/router/router'
import store from '@/store/store'
import {getToken} from "@/utils/auth";
import {Message} from 'element-ui'
import NProgress from 'nprogress'

NProgress.configure({showSpinner: true})


router.beforeEach((to,from,next) => {
  let userInfo = store.getters.userInfo;
  NProgress.start();
  if(getToken()){
    if(to.path === '/login'){
      next('/')
    }else{
      if(userInfo.name){
        next()
      }else{
        console.log('执行几次')
        store.dispatch('GetUserInfo').then(res => {
          next()
        }).catch(err=>{
          store.dispatch('FedLogout').then(res => {
            Message.error('验证用户信息失败，请重新登录');
            next('/')
          })
        })
      }
    }
  }else{
    if(to.path === '/login'){
      next()
    }else{
      next('/login')
    }
  }
})

router.afterEach(()=>{
  NProgress.done()
})

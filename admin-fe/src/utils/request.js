import axios from 'axios';
import router from '@/router/router'
import {getToken,removeToken} from "@/utils/auth";
import {Message} from 'element-ui';

let instance = axios.create({});

// request拦截器
instance.interceptors.request.use(config => {
  let token = getToken()
  if(token){
    config.headers.Authorization = token
  }
  return config;
},error => {
  console.log(error)
  Promise.reject(error)
})

// response拦截器
instance.interceptors.response.use(response => {
  let {code,message} = response.data
  console.log('resData',response.data)
  switch (code) {
    case 2:
      Message.error(message)
      removeToken()
      router.push({path:'/login'})
      break
    case 3:
      Message.error(message)
      router.push({path:'/login'})
      break
    default:
      return response.data
  }
  // if(code === 2){
  //   Message.error(message)
  //   removeToken()
  //   router.push({path:'/login'})
  // }
  // if(code === 3){
  //   Message.error(message)
  //   router.push({path:'/login'})
  // }
  // console.log('这里海之星吗')
  // return response.data
},error => {
  console.log('errrrrrrrrrr',error)
  Message.error(error);
  return Promise.reject(error)
})

export default instance

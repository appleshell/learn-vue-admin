import axios from '@/utils/request';

export function login(param){
  return axios.post('/mystudent/login',param)
}

export  function getUserInfo(){
  return axios.get('/mystudent/userInfo')
}

export const logout = param => {
  return axios.post('/mystudent/logout',param)
}

export const myLogin = params => {
  return axios.get('/student/login',{params})
}

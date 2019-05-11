import {login,getUserInfo,logout,myLogin} from "@/api/login";
import {getToken,setToken,removeToken} from "@/utils/auth";
import {Message} from 'element-ui'

const user = {
  state:{
    token:'',
    userInfo:{}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions:{
    //登录
    async Login({commit},param){
      // let res = await login(param);
      console.log(param)
      let res = await myLogin(param);
      if(res.code === 0){
        commit('SET_TOKEN',res.data.token);
        setToken(res.data.token)
        Message.success(res.message);
      }else{
        Message.error(res.message)
      }
      return res;
    },
    //获取用户信息
    async GetUserInfo({commit}){
      let res = await getUserInfo()
      if(res.code === 0){
        commit('SET_USER_INFO',res.data)
      }
      return res;
    },
    //退出登录
    async Logout({commit}){
      let token = getToken()
      let res = await logout({token})
      let { code } = res
      if(code === 0) {
        commit('SET_TOKEN','')
        commit('SET_USER_INFO',{})
        removeToken()
      }
      return res
    },
    //前端登出
    FedLogout({commit}){
      return new Promise((resolve,reject)=>{
        commit('SET_TOKEN','');
        removeToken();
        resolve();
      })
    }
  }
}

export default user;

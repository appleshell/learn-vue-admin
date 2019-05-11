import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'
import student from './module/student'
import getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    user,student
  },
  getters
})

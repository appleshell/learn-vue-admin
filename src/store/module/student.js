import {getClassDict,getGradeDict} from "@/api/studentTable";

const student = {
  state:{
    gradeDict:[],
    classDict:[],
  },
  mutations:{
    SET_GRADE_DICT:(state,grade) => {
      state.gradeDict = grade
    },
    SET_CLASS_DICT:(state,classList) => {
      state.classDict = classList
    }
  },
  actions:{
    async getGradeDict({commit}){
      let res = await getGradeDict()
      let {code,data} = res
      if(code === 0){
        commit('SET_GRADE_DICT',data.list)
      }
    },
    async getClassDict({commit}){
      let res = await getClassDict()
      let {code,data} = res
      if(code === 0){
        commit('SET_CLASS_DICT',data.list)
      }
    },
  }
}

export default student

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  gradeDict: state => state.student.gradeDict,
  gradeMap: state => {
    let map = {}
    state.student.gradeDict.forEach(item => {
      map[item.value] = item.label
    })
    return map
  },
  classDict: state => state.student.classDict
}

export default getters;

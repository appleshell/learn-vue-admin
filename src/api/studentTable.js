import axios from '@/utils/request'

// 获取学生列表
export const getStudentList = (params) => axios.get('/mystudent/studentList',{params})
// 获取学生列表-node
export const getStudentListNew = (params) => axios.get('/student',{params})
// 新增学生
export const addStudent = (data) => axios.post('/student/addStudent',{data})
// 更新学生
export const updateStudent = (data) => axios.post('/student/updateStudent',{data})
// 获取班级字典
export const getClassDict = (params) => axios.get('/mystudent/classList',{params})
// 获取年级字典
export const getGradeDict = (params) => axios.get('/mystudent/gradeList',{params})

import axios from '@/utils/request'

export const getCourseData = (params) => axios.get('/student',{params})

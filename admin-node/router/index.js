const Router = require('koa-router')
const router = new Router()
const sql = require('../mysql/config')
const {addToken,validateToken} = require('./token')

router.get('/test', (ctx, next) => {
  ctx.body = 'test page'
})
// 获取学生列表
router.get('/student', async (ctx, next) => {
  let token = ctx.request.headers.authorization
  let decode = validateToken(token)
  console.log('token',token)
  console.log('decode',decode)
  if(!decode){
    ctx.body = {
      code:3,
      message:'请重新登录'
    }
    return
  }
  if(decode && decode.exp <= new Date()/1000){
    ctx.body = {
      code:2,
      message:'token过期'
    }
    return
  }
  let {classType,stuNumber='',stuName,gradeType,discipline} = ctx.query
  let conditions = [classType,gradeType,discipline]
  let sql1 = stuNumber?' and stuNumber=?':''
  let sql2 = stuName?' and stuName=?':''
  if(stuNumber){
    conditions.push(stuNumber)
  }
  if(stuName){
    conditions.push(stuName)
  }
  // console.log(sql1,sql2,{classType,stuNumber,stuName,gradeType})
  let tmp = await sql.query('select * from student where classType=? and gradeType=? and discipline=?' + sql1 + sql2,conditions)
  // console.log(tmp)
  ctx.body = {
    code: 0,
    data: {list:tmp},
    message: '查询成功'
  }
})
// 新增学生
router.post('/student/addStudent',async (ctx,next) => {
  // console.log(ctx.request.body)
  let {gradeType,classType,discipline,stuName,stuNumber,sex,remark} = ctx.request.body.data
  let tmp = await sql.query('insert into student (gradeType,classType,discipline,stuName,stuNumber,sex,remark) values (?,?,?,?,?,?,?)',[gradeType,classType,discipline,stuName,stuNumber,sex,remark])
  ctx.body = {
    code: 0,
    data:tmp,
    message:'添加成功'
  }
})
//  更新学生
router.post('/student/updateStudent',async (ctx,next) => {
  let {gradeType,classType,discipline,stuName,stuNumber,sex,remark,id} = ctx.request.body.data
  let tmp = await sql.query('update student set gradeType=?,classType=?,discipline=?,stuName=?,stuNumber=?,sex=?,remark=? where id=?',[gradeType,classType,discipline,stuName,stuNumber,sex,remark,id])
  ctx.body = {
    code: 0,
    data: tmp,
    message: '更新成功'
  }
})
router.get('/student/login', async (ctx, next) => {
  let {userName, password} = ctx.query;
  let res = {}
  let tmp = await sql.query('select * from user where userName=? and password=?;', [userName, password])
  // console.log(tmp)
  if (tmp.length) {
    let token = addToken({userName:tmp[0].userName,id:tmp[0].id})
    res = {
      code: 0,
      data: {
        userName: tmp[0].userName,
        token,
      },
      message: '登录成功'
    }
  } else {
    res = {
      code: 1,
      message: '用户名或密码错误'
    }
  }
  ctx.body = res
})

module.exports = router

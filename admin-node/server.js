// import Koa from 'koa'
// import KoaStatic from 'koa-static'
// import Router from 'koa-router'
// import bodyParser from 'koa-bodyparser'
//
// import sql from './mysql/config'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const Router = require('koa-router');
const KoaStatic = require('koa-static');
// const sql = require('./mysql/config')
const router = require('./router/index')

const app = new Koa()
// const router = new Router()

app.use(bodyParser())
app.use(KoaStatic(__dirname + '/public'))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(4000)
console.log('graphQL server is listening port: 4000')

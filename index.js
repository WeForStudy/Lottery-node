var Koa=require('koa');
var path=require('path')
var bodyParser = require('koa-bodyparser');
var session = require('koa-session-minimal');
var MysqlStore = require('koa-mysql-session');
var config = require('./config/default.js');
var router=require('koa-router')
var views = require('koa-views')
var koaStatic = require('koa-static')
var app=new Koa()
const routers = require('./routers/index')



// session存储配置
const sessionMysqlConfig= {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Max-Age', 3600 * 24);
  await next();
});
// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , './public')
))

// // 配置服务端模板渲染引擎中间件
// app.use(views(path.join(__dirname, './views'), {
//   extension: 'ejs'
// }))

// 使用表单解析中间件
app.use(bodyParser())

// 使用新建的路由文件
// app.use(require('./routers/signin.js').routes())
app.use(routers.routes()).use(routers.allowedMethods())

// app.use(require('./routers/user').routes())
// app.use(require('./routers/posts.js').routes())
// app.use(require('./routers/signout.js').routes())

// 监听在1200
app.listen(config.port)

console.log(`listening on port ${config.port}`)

/**
 * 整合所有子路由
 */

const router = require('koa-router')()
const routes = require('../routes')

routes.forEach(item => {
  const service = require(`../services/${item.service}`)
  router[item.method](item.path, service[item.action])
})
module.exports = router

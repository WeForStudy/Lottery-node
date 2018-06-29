const pojo = require('../../helper/pojo')
const { success, failed, successWithCode } = pojo
const list = [
  'del',
  'add',
  'update',
]
module.exports = (config, file) => {
  const controller = require(`../../controller/${file}`)
	return config.reduce((copy, name) => {
    copy[name] = async ctx => {
      let res;
      try {
        const val = ctx.request.body
        await controller[name](val).then(result => {
          if (list.indexOf(name) !== -1) {
            res = successWithCode('操作成功')
            return
          }
          res = success(result)
        })
      } catch(err) {
        res = failed(err)
      }
      ctx.body = res
    }
	  return copy
	}, {})
}

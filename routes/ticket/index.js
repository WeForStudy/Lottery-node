const model = require('../model')
const methods = require('../methods')
module.exports = {
  ...model,
  'one': { method: methods.post },
  'lista': { method: methods.get },
}

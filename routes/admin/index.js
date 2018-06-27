const model = require('../model')
const methods = require('../methods')
module.exports = {
  ...model,
  'login': { method: methods.post },
}

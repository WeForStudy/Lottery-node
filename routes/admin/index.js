const model = require('../model')
module.exports = {
  ...model,
  'login': { method: methods.post },
}

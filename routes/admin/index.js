
const methods = require('../methods')

module.exports = {
  'list': { method: methods.get },
  'add': { method: methods.post },
  'update': { method: methods.post },
  'del': { method: methods.post },
}

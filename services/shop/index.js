const model = require('../model')
const m  = model([
  'list',
  'add',
  'update',
  'del',
  'one',
], 'shop')

module.exports = {
  ...m,
}

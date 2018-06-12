const model = require('../model')
const m  = model([
  'list',
  'add',
  'update',
  'del',
  'one',
  'lista',
], 'ticket')

module.exports = {
  ...m,
}

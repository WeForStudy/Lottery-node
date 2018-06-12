const model = require('../model')
const m  = model([
  'list',
  'add',
  'update',
  'del',
  'one',
], 'type')

module.exports = {
  ...m,
}

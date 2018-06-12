const model = require('../model')
const m  = model([
  'list',
  'add',
  'update',
  'del',
  'listb',
  'listu',
], 'order')

module.exports = {
  ...m,
}

// const listu = async ctx => {
//   let res;
//   try {
//     await controller.listu().then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const listb = async ctx => {
//   let res;
//   try {
//     await controller.listub().then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const list = async ctx => {
//   let res;
//   try {
//     await controller.list().then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const add = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.add(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const update = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.update(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }

// const del = async ctx => {
//   let res;
//   try {
//     const val = ctx.request.body
//     await controller.del(val).then(result => {
//       res = success(result)
//     })
//   } catch(err) {
//     res = failed(err)
//   }
//   ctx.body = res
// }


// module.exports = {
//   list,
//   add,
//   update,
//   del,
//   listb,
//   listu,
// }


// module.exports = (config => {
// 	return config.reduce((copy, name) => {
//     copy[name] = async ctx => {
//       let res;
//       try {
//         const val = ctx.request.body
//         await controller.del(val).then(result => {
//           res = success(result)
//         })
//       } catch(err) {
//         res = failed(err)
//       }
//       ctx.body = res
//     }
// 	  return copy
// 	}, {})
// })()

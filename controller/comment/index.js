const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')

// 新添评论类型
const add = (val) => {
  const { orderId, content } = val
  let _sql = 'insert into tour_comment(order_id,content,create_time) values(?,?,now());'
  return query( _sql, [ orderId, content ] )
}

// 更改评论类型
const update = (val) => {
  const { content, orderId, extraInfo, id } = val
  let _sql = 'update tour_comment set '
  const { sql, args } = NtNUpdate({ content,order_id: orderId, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询评论类型
const list = val => {
  const sql = 'select * from tour_comment where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 根据Id查询
const one = val => {
  const { shopId } = val
  const sql = 'select * from tour_comment where status != ? and id = ?'
  return query(sql, [ STATUS.DEL, shopId ])
}


// 删除评论类型
const del = val => {
  const { id } = val
  const sql = 'update tour_comment set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  one,
  update,
  del,
}


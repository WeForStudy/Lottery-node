const pool = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { query } = pool
const STATUS = require('../../enum')

// 新添订单
const add = (val) => {
  const { userId, guiderId, tourNumber, totalMoney } = val
  let _sql = 'insert into tour_order(user_id,guider_id,total_money,order_time) values(?,?,?,?,now());'
  return query( _sql, [ userId, guiderId, tourNumber, totalMoney ] )
}

// 更改订单
const update = (val) => {
  const { userId, guiderId, totalMoney, orderTime, extraInfo, id } = val
  let _sql = 'update tour_order set '
  const { sql, args } = NtNUpdate({ user_id: userId, guider_id: guiderId,total_money: totalMoney, order_time: orderTime, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询订单
const list = val => {
  const sql = 'select * from tour_order where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 根据商家查订单
const listb = val => {
  const { guiderId } = val
  const sql = 'select * from tour_order where status != ? and guider_id = ?'
  return query(sql, [ STATUS.DEL, guiderId ])
}

// 根据用户查订单
const listu = val => {
  const { userId } = val
  const sql = 'select * from tour_order where status != ? and user_id = ?'
  return query(sql, [ STATUS.DEL, userId ])
}

// 删除订单
const del = val => {
  const { id } = val
  const sql = 'update tour_order set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  listu,
  listb,
  update,
  del,
}


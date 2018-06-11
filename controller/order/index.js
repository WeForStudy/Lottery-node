const pool = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { query } = pool
const TYPES = require('../../enum')

// 新添订单
const add = (val) => {
  const { userId, shopId, lotteryNumber, totalMoney } = val
  let _sql = 'insert into lottery_order(user_id,shop_id,lottery_number,total_money,order_time) values(?,?,?,?,now());'
  return query( _sql, [ userId, shopId, lotteryNumber, totalMoney, TYPES.normal] )
}

// 更改订单
const update = (val) => {
  const { userId, shopId, lotteryNumber, totalMoney, orderTime, extraInfo, id } = val
  let _sql = 'update lottery_order set '
  const { sql, args } = NtNUpdate({ user_id: userId, shop_id: shopId, lottery_number: lotteryNumber,total_money: totalMoney, order_time: orderTime, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询订单
const list = val => {
  const sql = 'select * from lottery_order where status != ?'
  return query(sql, [ TYPES.deled ])
}

// 删除订单
const del = val => {
  const { id } = val
  const sql = 'update lottery_order set status = ? where id = ?'
  return query(sql, [ TYPES.deled, id ])
}

module.exports = {
  add,
  list,
  update,
  del,
}
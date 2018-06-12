const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')

// 新添订单
const add = (val) => {
  const { account, name, password, address, phone, businessNo } = val
  let _sql = 'insert into lottery_shop(account,name,password,address,phone,business_no,status,create_time) values(?,?,?,?,?,?,?,now());'
  return query( _sql, [ account, name, password, address,phone,businessNo, STATUS.NORMAL] )
}

// 更改订单
const update = (val) => {
  const { account, name, shopId, password, address, phone, businessNo, extraInfo} = val
  let _sql = 'update lottery_shop set '
  const { sql, args } = NtNUpdate({ account, name, password, address, phone,  business_no: businessNo, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询订单
const list = val => {
  const sql = 'select * from lottery_shop where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 根据商家Id查询
const one = val => {
  const { shopId } = val
  const sql = 'select * from lottery_shop where status != ? and shop_id = ?'
  return query(sql, [ STATUS.DEL, shopId ])
}


// 删除订单
const del = val => {
  const { id } = val
  const sql = 'update lottery_shop set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  one,
  listb,
  update,
  del,
}


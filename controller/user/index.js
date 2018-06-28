const pool = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { query } = pool
const { STATUS } = require('../../enum')

// 新添用户
const add = (val) => {
  const { name, phone, password } = val
  let _sql = 'insert into tour_user(name,phone,password,create_time,status) values(?,?,?,now(),?);'
  return query( _sql, [ name, phone, password, creator, STATUS.NORMAL] )
}

// 更改用户
const update = (val) => {
  const { name, phone, password, balance, extraInfo, cardNo, id } = val
  let _sql = 'update tour_user set '
  const { sql, args } = NtNUpdate({ name, phone, password, card_no: cardNo, balance, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询用户
const list = val => {
  const sql = 'select * from tour_user where status != ?'
  return query(sql, [ STATUS.DELED ])
}

// 删除用户
const del = val => {
  const { id } = val
  const sql = 'update tour_user set status = ? where id = ?'
  return query(sql, [ STATUS.DELED, id ])
}

module.exports = {
  add,
  list,
  update,
  del,
}
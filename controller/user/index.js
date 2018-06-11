const pool = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { query } = pool
const TYPES = require('../../enum')

// 新添用户
const add = (val) => {
  const { username, phone, password } = val
  let _sql = 'insert into lottery_user(username,phone,password,create_time,status) values(?,?,?,now(),?);'
  return query( _sql, [ username, phone, password, creator, TYPES.normal] )
}

// 更改用户
const update = (val) => {
  const { username, phone, password, balance, lastBetTime, extraInfo, carNo, id } = val
  let _sql = 'update lottery_user set '
  const { sql, args } = NtNUpdate({ username, phone, password,last_bet_time: lastBetTime, car_no: carNo, balance, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询用户
const list = val => {
  const sql = 'select * from lottery_user where status != ?'
  return query(sql, [ TYPES.deled ])
}

// 删除用户
const del = val => {
  const { id } = val
  const sql = 'update lottery_user set status = ? where id = ?'
  return query(sql, [ TYPES.deled, id ])
}

module.exports = {
  add,
  list,
  update,
  del,
}
const pool = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')
const TYPES = {
  NORMAL: 0,
}
const { query } = pool
// 新添管理员
const add = (val) => {
  const { account, phone, password, name, creator } = val
  const _sql = 'insert into tour_admin(account,phone,password,create_time,creator,name,type,status) values(?,?,?,now(),?,?,?,?);'
  return query( _sql, [ account, phone, password, creator, name,TYPES.NORMAL,STATUS.NORMAL] )
}

const login = (val) => {
  const { account, password } = val
  const _sql = 'select * from tour_admin where account = ? and password = ? and status = ?'
  return query( _sql, [ account, password, STATUS.NORMAL ] )
}

// 更改管理员
const update = (val) => {
  const { account, phone, password, name, type, id } = val
  const _sql = 'update tour_admin set '
  const { sql, args } = NtNUpdate({ account, phone, password, name, type }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询管理员
const list = val => {
  const sql = 'select * from tour_admin where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 删除管理员
const del = val => {
  const { id } = val
  const sql = 'update tour_admin set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  update,
  del,
  login,
}
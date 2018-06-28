const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { STATUS } = require('../../enum')

// 新添彩票类型
const add = (val) => {
  const { name, creator } = val
  let _sql = 'insert into lottery_type(name,creator,status,create_time) values(?,?,?,now());'
  return query( _sql, [ name, creator, STATUS.NORMAL ] )
}

// 更改彩票类型
const update = (val) => {
  const { name, extraInfo, id } = val
  let _sql = 'update lottery_type set '
  const { sql, args } = NtNUpdate({ name, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询彩票类型
const list = val => {
  const sql = 'select * from lottery_type where status != ?'
  return query(sql, [ STATUS.DELED ])
}

// 根据Id查询
const one = val => {
  const { shopId } = val
  const sql = 'select * from lottery_type where status != ? and id = ?'
  return query(sql, [ STATUS.DELED, shopId ])
}


// 删除彩票类型
const del = val => {
  const { id } = val
  const sql = 'update lottery_type set status = ? where id = ?'
  return query(sql, [ STATUS.DELED, id ])
}

module.exports = {
  add,
  list,
  one,
  update,
  del,
}


const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const { STATUS } = require('../../enum')

// 新添向导
const add = (val) => {
  const { name, password, address, phone } = val
  let _sql = 'insert into tour_guider(name,password,address,phone,status,create_time) values(?,?,?,?,?,now());'
  return query( _sql, [ name, password, address, phone, STATUS.NORMAL] )
}

// 更改向导
const update = (val) => {
  const { name, id, password, address, phone, cardNo, extraInfo} = val
  let _sql = 'update tour_guider set '
  const { sql, args } = NtNUpdate({ name, password, address, phone,  card_no: cardNo, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询向导
const list = val => {
  const sql = 'select * from tour_guider where status != ?'
  return query(sql, [ STATUS.DELED ])
}

// 根据Id查询
const one = val => {
  const { id } = val
  const sql = 'select * from tour_guider where status != ? and id = ?'
  return query(sql, [ STATUS.DELED, id ])
}


// 删除向导
const del = val => {
  const { id } = val
  const sql = 'update tour_guider set status = ? where id = ?'
  return query(sql, [ STATUS.DELED, id ])
}

module.exports = {
  add,
  list,
  one,
  update,
  del,
}


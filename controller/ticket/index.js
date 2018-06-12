const { query } = require('../../lib/mysql')
const { NtNUpdate } = require('../../helper')
const STATUS = require('../../enum')

// 新添投注
const add = (val) => {
  const { typeId, period, boomTime, prize } = val
  let _sql = 'insert into lottery_ticket(type_id,period,boom_time,prize,status,create_time) values(?,?,?,?,?,now());'
  return query( _sql, [ typeId, period, boomTime,prize ? prize : 0, STATUS.NORMAL] )
}

// 更改投注
const update = (val) => {
  const { typeId, period, boomTime, prize, winningNumber, extraInfo, id } = val
  let _sql = 'update lottery_ticket set '
  const { sql, args } = NtNUpdate({ typeId, period, boom_time: boomTime, prize, winning_number: winningNumber, extra_info: extraInfo }, _sql)
  _sql = sql + 'where id = ?'
  return query( _sql, [...args, id] )
}

// 查询投注
const list = val => {
  const sql = 'select * from lottery_ticket where status != ?'
  return query(sql, [ STATUS.DEL ])
}

// 查询所有集合标注
const lista = val => {
  const sql = 'select t.period , ty.name, t.boom_time as boomTime, t.boom_number as boomNumber, t.winning_number as winningNumber, t.prize, t.extra_info as extraInfo from lottery_ticket as t, lottery_type as ty where t.type_id = ty.id and t.status != ?'
  return query(sql, [ STATUS.ABA ])
}

// 根据Id查询
const one = val => {
  const { id } = val
  const sql = 'select * from lottery_ticket where status != ? and id = ?'
  return query(sql, [ STATUS.DEL, id ])
}


// 删除投注
const del = val => {
  const { id } = val
  const sql = 'update lottery_ticket set status = ? where id = ?'
  return query(sql, [ STATUS.DEL, id ])
}

module.exports = {
  add,
  list,
  lista,
  one,
  update,
  del,
}


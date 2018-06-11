const update = (params, sql) =>  {
  let keys = Object.keys(params)
  let arr = []
  keys.forEach((key) => {
    if (key) {
      sql = sql + `${key} = ? ,`
      arr.push(params[key])
    }
  })
  sql = sql.substring(0, sql.length - 1)
  return {
    args: arr,
    sql,
  }
}

module.exports = {
  NtNUpdate: update,
}

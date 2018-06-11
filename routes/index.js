
module.exports = (config => {
	return config.reduce((copy, name) => {
    const obj = require(`./${name}`)
    const newArr = Object.keys(obj).reduce((total, each) => {
      let item = { path: `/api/${name}/${each}`, method: obj[each].method, action: each, service: name }
      total.push(item)
      return total
    }, [])
    copy = copy.concat(newArr)
	  return copy
	}, [])
})([
  'admin',
])

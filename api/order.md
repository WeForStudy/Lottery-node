- list
 > 获取所有order列表
 - 参数：无
 - 返回：order列表
- listb
 > 根据商家id查询订单信息
 - 参数： shopId
 - 返回： order列表
- listu
 > 根据用户id查询订单信息
 - 参数： userId
 - 返回： order列表
- del
 > 根据id删除对应的order
 - 参数: id
 - 返回：无
- add
 > 添加一个新的order
 - 参数： userId, shopId, lotteryNumber, totalMoney
 - 返回：无
- update
 > 根据id修改order信息
 - 参数： userId, shopId, name, lotteryNumber, orderTime, totalMoney, extraInfo(以上参数可变), id
 - 返回：无


### 关于api用法的说明

#### 1.基本路径为: api/文件名/方法名

> 可以查看services下的文件夹名

-  示例 

  ```js
  // 文件在services下的admin
  const model = require('../model')
  const m  = model([
    'list', // 这里是路径
    'add', 
    'update',
    'del'
  ], 'admin')
  
  module.exports = {
    ...m,
  }      
  ```

  之后在目录生成的路径就是

  `/api/admin/list`

  `/api/admin/add`

  调用时应使用

  `http://localhost:port/api/admin/xxx`

#### 2.各个接口所需要的参数

> 查看controller下的文件夹

- 示例

  对应`/api/admin/add`所需要的参数是：

   ```js
const add = (val) => {
  // 在val里面解构出来的就是所需要的参数，以及参数名
  const { account, phone, password, name, creator } = val
  let _sql = 'insert into lottery_admin(account,phone,password,create_time,creator,name,type,status) values(?,?,?,now(),?,?,?,?);'
  return query( _sql, [ account, phone, password, creator, name,TYPES.NORMAL,STATUS.NORMAL] )
}
   ```



#### 3.其他

- 所有的http方法只分为两种
  - 有参数为post
  - 无参数为get
- 待补充...

​     
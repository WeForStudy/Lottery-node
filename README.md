# Loterry-node
A backend for lottery
 
 1. 打开mysql,运行sql下的sql语句
 2. npm install
 3. npm start
 4. 查看api下各个接口所需要的参数及路径
### 文件夹详解
 1. controller
   > 与数据库直接连接层，当不知道参数需要哪几个时可以进入看
 2. routes
   > 里面定义了一堆路由，地址为/api/文件夹名/属性名，还有调用api相关的http方法
 3. config
   > 里面定义了数据库的端口和数据库名称以及密码
 4. api
   > 说明了各个api的用法

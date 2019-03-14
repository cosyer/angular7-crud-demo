import mysql from "promise-mysql";

import keys from "./keys";

// 创建连接池
const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection => {
  pool.releaseConnection(connection);
  console.log("DB is Connected");
});

// 一般的mysql
// var mysql = require('mysql')
// var connection = mysql.createConnection({
// host : '',
// user : '',
// password : '',
// port: '',
// database: '',
// });
// connection.connect()
// var userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)';
// var userAddSql_Params = ['Wilson', 'abcd'];
// // 增加
// connection.query(userAddSql,userAddSql_Params,function(error,res){
// connection.end() // 还有destory方法
// })
// // 更新
// var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
// var userModSql_Params = ['张三', '5678',1];
// connection.query(userAddSql,userAddSql_Params,function(error,res){

// })
// // 查询
// var userGetSql = 'SELECT * FROM userinfo';
// connection.query(userGetSql,function(error,res){

// })
// // 删除
// var userDelSql = 'DELETE FROM userinfo';
// connection.query(userDelSql,function(error,res){

// })

// //监听connection事件
// pool.on('connection', function(connection) {
// connection.query();
// });

// //直接使用
// pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
// if (err) throw err;
// console.log('The solution is: ', rows[0].solution);
// });

// // 共享
// pool.getConnection(function(err, connection) {
// // connected!
// });
export default pool;

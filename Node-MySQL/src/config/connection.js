const mysql = require('mysql');
 const objectConnection ={
     "host": "127.0.0.1",
     "port": 3306,
     "user": "root",
     "password": "password",
     "database": "crud_node"
 }

 const myConn = mysql.createConnection(objectConnection);
 myConn.connect((err)=>{
    if(err){
        console.log("Ha ocurrido un problema", err);
    } else {
        console.log("Base de datos conectada");
    }
 });
 module.exports = myConn;
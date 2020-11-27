const mysql = require('mysql');
const objectConnection = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "password",
    "database": "libros_examen"
}

const miConec = mysql.createConnection(objectConnection);
miConec.connect((err)=>{
    if(err){
        console.log("Ha ocurrido un problema",err);
    }else {
        console.log("K grande! base de datos conectada");
    }
});
module.exports = miConec;
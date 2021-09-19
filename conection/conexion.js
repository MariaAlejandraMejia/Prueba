//creo conexion a mysql
//inicio el mysql
const mysql = require('mysql');

//agrego los datos generales de my phpmysql
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pureba'
})

//hago comprobacion de conexion.
conexion.connect((error)=>{
    if(error){
        console.error('error de conexion a db')
        return
    }
    console.log('conexion db exitosa')
})

module.exports = conexion;
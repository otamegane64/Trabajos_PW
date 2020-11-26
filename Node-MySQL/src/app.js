const express = require('express')
const cors = require('cors')

//Inicializar
const app = express();
app.use(cors())
//configuración
app.set('port',process.env.PORT || 3000)
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
//Bases de datos
require('./config/connection');
//Rutas
app.use(require('./routes/personasroute'));
//Levantar el servidor
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log("Ha ocurrido un error: ",error);
    }else {
        console.log("Servidor en puerto: ",app.get('port'));
    }
})
const conexion = require('../config/connection');

function listado(req,res){
    if(conexion){
        let sql = 'select * from libro';
        conexion.query(sql,(err,libros)=>{
            if(err){
                res.json(err);
            } else{
                res.json(libros);
            }
        })
    }
}

function crear(req, res){
    if(conexion){
        const libro = req.body;
        if(!libro.titulo){
            return res.status(400).send({error:true,mensaje:"El titulo es obligatorio"})
        }
        if(!libro.autor){
            return res.status(400).send({error:true,mensaje:"El autor es obligatorio"})
        }
        if(libro.num_paginas && libro.num_paginas.length >4){
            return res.status(400).send({error: true, mensaje:"La longitud no deben ser más de 4 digitos"})
        }
        if(libro.anio && libro.anio.length !==4){
            return res.status(400).send({error: true, mensaje:"El año deben ser 4 digitos!"})
        }
        let sql = 'INSERT INTO libro set ?';
        conexion.query(sql,[libro],(err,rows)=>{
            if(err){
                res.json(err);
            } else {
                res.json({error:false, data: rows, mensaje:"Se agrego correctamente el libro"})
            }
        }
        )

    }
}
module.exports = {
    listado,
    crear
}
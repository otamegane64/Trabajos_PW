const express = require('express');
const rutas = express.Router();

//Importando el contrololador de personas
const personasController = require('../controllers/personasController');
//Rutas
rutas.get('/',personasController.listar);
rutas.get('/:id', personasController.obtenerPersona);
rutas.post('/',personasController.crear);
rutas.put('/:id', personasController.editar);
rutas.delete('/:id', personasController.eliminar);
module.exports = rutas;
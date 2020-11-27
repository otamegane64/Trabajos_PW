const express = require ('express');
const rutas = express.Router();

const librosControlador = require('../Controllers/libroscontroller');

rutas.get('/',librosControlador.listado);
rutas.post('/',librosControlador.crear);

module.exports = rutas;
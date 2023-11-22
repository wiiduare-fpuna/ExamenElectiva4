const express = require('express');
const router = express.Router();
const mascotaControlador = require('../controlador/mascota');

router.get('/', mascotaControlador.obtenerMascotas);
router.get('/:id', mascotaControlador.obtenerMascota);
router.post('/', mascotaControlador.crearMascota);
router.put('/:id', mascotaControlador.modificarMascota);
router.delete('/:id', mascotaControlador.eliminarMascota);

module.exports = router;

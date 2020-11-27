const router = require('express').Router();
const { getClientes, getCliente, postCliente, putCliente, deleteCliente } = require('../controllers/clientesController');
const { getReserva, getReservas, postReserva, putReserva, deleteReserva } = require('../controllers/reservasController');


router.get('/clientes', getClientes)
router.get('/clientes/:id',getCliente )
router.post('/clientes', postCliente)
router.put('/clientes/:id', putCliente)
router.delete('/clientes/:id', deleteCliente)

///////////////////////////////////////

router.get('/reservas', getReservas)
router.get('/reservas/:id',getReserva )
//router.post('/reservas', postReserva)
//router.put('/reservas/:id', putReserva)
//router.delete('/reservas/:id', deleteReserva)

module.exports = router;
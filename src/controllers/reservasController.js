const { getConnectionReserv } = require('../database');
const { v4 } = require('uuid');

const getReservas = (req, res) => {
    const reservas = getConnectionReserv().get('reservas').value();
    res.json(reservas)
}

const getReserva = (req, res) => {
    const reserva = getConnectionReserv().get('reservas').find({id: req.params.id}).value();
    res.json(reserva)
}

const postReserva = (req, res) => {
    const newReserv = {
        id: v4(),
        id_cliente: req.body.id_cliente,
        EstadoReserva: req.body.EstadoReserva,
        NombreContacto: req.body.NombreContacto,
        MotivoReserva: req.body.MotivoReserva,
        TipoReserva: req.body.TipoReserva,
        Discoteca: req.body.Discoteca,
        NombreCumpleañero: req.body.NombreCumpleañero,
        FechaReserva: req.body.FechaReserva,
        Promotor: 'NN',
        Observaciones: req.body.Observaciones  
    };
    getConnectionReserv().get('reservas').push(newReserv).write()
    res.send(newReserv)
}

const putReserva = async (req, res) => {
    const reservaUpdate = await getConnectionReserv().get('reservas').find({id: req.params.id})
    .assign(req.body).write();
    res.json(reservaUpdate)
}

const deleteReserva = async (req, res) => {
    const reservaDel = await getConnectionReserv().get('reservas').remove({id: req.params.id}).write();
    res.json({reserva_eliminada: reservaDel})
}

module.exports = {
    getReserva,
    getReservas,
    deleteReserva,
    putReserva,
    postReserva
}
    
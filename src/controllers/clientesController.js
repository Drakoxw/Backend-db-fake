const { getConnectionCli } = require('../database');
const { v4 } = require('uuid');

const getClientes = (req, res) => {
    const clientes = getConnectionCli().get('clientes').value();
    res.json(clientes)
}

const getCliente = (req, res) => {
    const cliente = getConnectionCli().get('clientes').find({id: req.params.id}).value();
    res.json(cliente)
}

const postCliente = (req, res) => {
    const newCli = {
        id: v4(),
        Nombre: req.body.Nombre,
        Correo: req.body.Correo,
        Sexo: req.body.Sexo,
        Whastapp: req.body.Whastapp,
        Discoteca: req.body.Discoteca,
        Dia: parseInt(req.body.Dia, 10),
        Mes: parseInt(req.body.Mes, 10),
        Año: parseInt(req.body.Año, 10),
        EstadoReserva: 'No usado ',
        ContactoActivo: 'No usado'
    };
    getConnectionCli().get('clientes').push(newCli).write()
    res.send(newCli)
}

const putCliente = async (req, res) => {
    const clienteUpdate = await getConnectionCli().get('clientes').find({id: req.params.id})
    .assign(req.body).write();
    if (clienteUpdate.id) {
        return res.json(clienteUpdate)
    } else {
        res.json({ERROR : 'El id no existe!'})
    }   
}

const deleteCliente = async (req, res) => {
    const clienteDel = await getConnectionCli().get('clientes').remove({id: req.params.id}).write();
    if (clienteDel.id) {
        return res.json({cliente_eliminado: clienteDel})
    } else {
        res.json({ERROR : 'El id no existe!'})
    }
}


module.exports = {
    getCliente,
    getClientes,
    deleteCliente,
    putCliente,
    postCliente
}
    
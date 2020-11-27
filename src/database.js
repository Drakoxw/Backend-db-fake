const low = require('lowdb');
const fileAsync =  require('lowdb/adapters/FileAsync')


let dbCli;
let dbRe;

async function createConnectionCli() {
    const adapterCli = new fileAsync('db-clientes.json');
    dbCli = await low(adapterCli);
    dbCli.defaults({clientes: []}).write();
}

async function createConnectionReserv() {
    const adapterReserv = new fileAsync('db-reservas.json');
    dbRe = await low(adapterReserv);
    dbRe.defaults({reservas: []}).write();
}

const getConnectionCli = () => dbCli;
const getConnectionReserv = () => dbRe;

module.exports = {
    createConnectionCli,
    createConnectionReserv,
    getConnectionCli,
    getConnectionReserv
}
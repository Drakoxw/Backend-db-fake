const app = require('./src/app');
const { createConnectionCli, createConnectionReserv } = require('./src/database');

const port = process.env.PORT || 6969

createConnectionCli();
createConnectionReserv();

app.listen(port, () => {
    console.log(`Server runninng on ${port}`);
}) 


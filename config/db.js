const { Sequelize } = require('sequelize');

const username = 'postgres';
const password = 'k316409562';
const host = 'localhost';
const port = '5432';
const database = 'timestamp';

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => console.log(err));

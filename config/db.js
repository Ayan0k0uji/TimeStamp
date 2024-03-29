const { Sequelize } = require('sequelize');

const username = 'postgres';
const password = '00023';
const host = 'localhost';
const port = '5432';
const database = 'timestamp';

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => console.log(err));

module.exports = { sequelize }

// \copy cities from 'C:\\Users\\delov\\Desktop\\city.csv' DELIMITER ',' CSV ENCODING 'UTF8';
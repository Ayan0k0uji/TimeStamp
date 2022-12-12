const { City } = require('./models/city-model');
const { v4: uuidv4 } = require('uuid'); // функции из этого модуля создают айдишники
const fs = require('fs');


const initCity = async () => {
    try {
        const data = fs.readFileSync("config/city.txt").toLocaleString();
        const names = data.split("\r\n");
        const res = names.map(el => {
            return { 'id_city': uuidv4(), 'name_city': el };
        });
        City.bulkCreate(res);
    } catch(err) {
        console.log(err);
    }
}
initCity();
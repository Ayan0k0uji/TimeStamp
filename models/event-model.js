// модель мероприятия

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");

class Event extends Model { }
Event.init({
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: { // Название
        type: Sequelize.STRING,
        allowNull: false
    },
    date: { // Дата
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    time: { // Время
        type: Sequelize.DataTypes.DATE
    }, 
    country: { // Страна
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    city: { // Город
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    venue: { // Место проведение
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ageLimit: { //Возрастное ограничение
        type: Sequelize.DataTypes.INTEGER,
    },
    availablePlaces: { //Свободные места
        type: Sequelize.DataTypes.INTEGER
    },
    description: { //
        type: Sequelize.DataTypes.STRING,
    },
    price: { // Цена
        type: Sequelize.DataTypes.DOUBLE(2)
    },
    poster: { // Афиша
        type: Sequelize.DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'event'
});

//Метод поиска мероприятий по нескольким параметрам
Event.searchAll = async function (query) {
    whereStatement = {[Op.and]: []};

    if (query.name) {
        whereStatement[Op.and].push({
            name: {
                [Op.like]: `%${query.name}%`
            }
        });
    }

    if (query.date_from && query.date_to) {
        whereStatement[Op.and].push({
            date: {[Op.between]: [query.date_from, query.date_to]}
        });
    }

    if (query.price_from && query.price_to) {
        whereStatement[Op.and].push({
            price: {[Op.between]: [query.price_from, query.price_to]}
        });
    }

    if (query.city) {
        whereStatement[Op.and].push({
            city: query.city
        });
    }

    const result = await this.findAll({
        where: whereStatement
    });

    const responseData = {
        status: Boolean(result),
        data: result,
    };

    return responseData;
};

module.exports = { Event };
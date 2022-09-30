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
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: Sequelize.DataTypes.DATE
    }, country: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    venue: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ageLimit: {
        type: Sequelize.DataTypes.INTEGER,
    },
    availablePlaces: {
        type: Sequelize.DataTypes.INTEGER
    },
    description: {
        type: Sequelize.DataTypes.STRING,
    },
    price: {
        type: Sequelize.DataTypes.DOUBLE(2)
    },
    poster: {
        type: Sequelize.DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'event'
});

Event.searchAll = async function (query) {
    whereStatement = {[Op.and]: []};
    if (query.name) {
        whereStatement[Op.and].push({
            name: {
                [Op.like]: `%${query.name}%`
            }
        });
    }

    if (query.date) {
        whereStatement[Op.and].push({
            date: query.date
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
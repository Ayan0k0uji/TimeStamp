const { Model, Sequelize } = require("sequelize");
const {sequelize} = require("../config/db");

class Event extends Model {}
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
    modelName: 'user'
});

module.exports = {Event};
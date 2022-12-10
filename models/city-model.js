// модель города

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");

class City extends Model {}
City.init({
    id_city: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },

    name_city: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'city'
});

module.exports = { City };
// модель участника мероприятий

const { Model, Sequelize} = require("sequelize");
const { sequelize } = require("../config/db");
const { Event } = require('../models/event-model');

class Participant extends Model { }
Participant.init({
    User_ID: { // ID пользователя
        type: Sequelize.DataTypes.UUID
    },
    User_Initials: { // Инициалы пользователя
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Num_Of_Occupied_Place: { // Номер занимаего места на мероприятии
        type: Sequelize.DataTypes.INTEGER
    },
    User_email: { // Электронная почта пользователя
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'participant'
});

Participant.hasMany(Event, {    // Создание foreign key столбца для Event
    foreignKey: 'Event_ID',
    onDelete: 'CASCADE',
    allowNull: false,
    type: Sequelize.DataTypes.UUID
});


module.exports = { Participant };
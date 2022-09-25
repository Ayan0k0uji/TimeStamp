// контроллер мероприятий

const { Event } = require('../models/event-model');
const { Op } = require("sequelize");
const {v4: uuidv4} = require('uuid'); // функции из этого модуля создают айдишники

const createEvent = (req, res) => {
    const id = uuidv4();
    const newUser = Event.create({
        id: id,
        name: req.body.name,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
        ageLimit: req.body.ageLimit,
        availablePlaces: req.body.availablePlaces,
        description: req.body.description,
        price: req.body.price,
        poster: req.body.poster
    }).then(result => {
        console.log(newUser);
        res.send({status: true});
    }).catch(err =>{ 
            console.log(err);
            res.send({status: false});
        }
    );
};

const getEvents = async (req, res) => {
    try {
        events = await Event.findAll();
        const responseData = {
            status: true,
            data: events,
        };
        res.send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.send({status: false});
    }
}

const getEventByID = async (req, res) => {
    try {
        events = await Event.findByPk(req.params.id);
        const responseData = {
            status: Boolean(events),
            data: events,
        };
        res.send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.send({status: false});
    }
}

const deleteEventByID = async (req, res) => {
    try {
        const result = await Event.destroy({
            where: {
                id: req.params.id
            }
        });
        
        console.log( result);
        res.send(JSON.stringify({status: Boolean(result)}, null, 2));
    } catch(err) {
        res.send({status: false});
    }
}

const changeEventByID = async (req, res) => {
    try {
        events = await Event.findByPk(req.params.id);
        if(events) {
            await Event.update({
                name: req.body.name,
                date: req.body.date,
                time: req.body.time,
                venue: req.body.venue,
                ageLimit: req.body.ageLimit,
                availablePlaces: req.body.availablePlaces,
                description: req.body.description,
                price: req.body.price,
                poster: req.body.poster
            },
            {
                where: {id: req.params.id}
            });
            res.send({status: true});
        } else {
            res.send({status: false});
        }
    } catch(err) {
        res.send({status: false});
    }
}

const searchEvents = async (req, res) => {
    try {
        const result = await Event.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.name}%`
                }
            }
        });
        const responseData = {
            status: Boolean(result),
            data: result,
        };
        res.send(JSON.stringify(responseData, null, 2)); 
    } catch(err) {
        console.log(err);
        res.send({status: false});
    }
}

module.exports = {createEvent, getEventByID, deleteEventByID, changeEventByID, searchEvents};
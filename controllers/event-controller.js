// контроллер мероприятий

const { Event } = require('../models/event-model');
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
        events = await Event.findAll({raw: true});
        const responseData = {
            status: true,
            data: events,
        };
        res.send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.send({status: false});
    }
}

module.exports = {createEvent, getEvents};
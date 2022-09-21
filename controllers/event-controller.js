// контроллер мероприятий

const { Event } = require('../models/event-model');
const {v4: uuidv4} = require('uuid'); // функции из этого модуля создают айдишники

const createEvent = (req, res) => {
    const id = uuidv4();
    Event.create({
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
        console.log(result);
    }).catch(err => console.log(err));

    res.send('User has been created successfully');
};

module.exports = {createEvent};
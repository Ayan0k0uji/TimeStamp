// контроллер мероприятий

const { Event } = require('../models/event-model');
const { Event_id_for_category }  = require('../models/event_id-category-model');
const {v4: uuidv4} = require('uuid'); // функции из этого модуля создают айдишники

// создать мероприятие
const createEvent = async (req, res) => {
    const id = uuidv4();
    try {
        await Event.create({
            id: id,
            name: req.body.name,
            date: req.body.date,
            time: req.body.time,
            country: req.body.country,
            city: req.body.city,
            venue: req.body.venue,
            ageLimit: req.body.ageLimit,
            availablePlaces: req.body.availablePlaces,
            description: req.body.description,
            price: req.body.price,
            poster: req.body.poster
        });
        await Event_id_for_category.createCategory(req.body, id);
        res.status(200).send({status: true});
    } catch(err) { 
        res.status(500).send({status: false});
    }
};

// получить все мероприятия из БД
const getEvents = async (req, res) => {
    try {
        events = await Event.findAll();
        const responseData = {
            status: true,
            data: events,
        };
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

// получить мероприятие по ID
const getEventByID = async (req, res) => {
    try {
        events = await Event.findByPk(req.params.id);
        const responseData = {
            status: Boolean(events),
            data: events,
        };
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

// удалить выбранное по ID мероприятие
const deleteEventByID = async (req, res) => {
    try {
        const result = await Event.destroy({
            where: {
                id: req.params.id
            }
        });
        
        console.log(result);
        res.status(200).send(JSON.stringify({status: Boolean(result)}, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

// изменить выбранное по ID мероприятие
const changeEventByID = async (req, res) => {
    try {
        const events = await Event.findByPk(req.params.id);
        if(events) {
            await Event.update({
                name: req.body.name,
                date: req.body.date,
                time: req.body.time,
                country: req.body.country,
                city: req.body.city,
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
            Event_id_for_category.deleteEventCategory(req.params.id);
            Event_id_for_category.createCategory(req.body, req.params.id);
            res.status(200).send({status: true});
        } else {
            res.send({status: false});
        }
    } catch(err) {
        res.status(500).send({status: false});
    }
}

// поиск мероприятий по параметрам req.query
const searchEvents = async (req, res) => {
    try {
        responseData = await Event.searchAll(req.query);
        console.log(responseData);
        res.status(200).send(JSON.stringify(responseData, null, 2)); 
    } catch(err) {
        console.log(err);
        res.status(500).send({status: false});
    }
}

module.exports = {createEvent, getEventByID, deleteEventByID, changeEventByID, searchEvents};
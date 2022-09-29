// роуты для мероприятий

const express = require('express');
const {createEvent, getEventByID, deleteEventByID, changeEventByID, searchEvents} = require('../controllers/event-controller');

const router = express.Router();
const jsonParcer = express.json();

router.get('/events/search/', jsonParcer, searchEvents);

//router.get('/events', jsonParcer, getEvents);
router.post('/events', jsonParcer, createEvent);
router.get('/events/:id', jsonParcer, getEventByID);
router.delete('/events/:id', jsonParcer, deleteEventByID);
router.put('/events/:id', jsonParcer, changeEventByID);

module.exports = router;
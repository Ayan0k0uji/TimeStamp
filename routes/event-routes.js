// роуты для мероприятий

const express = require('express');
const {createEvent, getEvents, getEventByID, deleteEventByID, changeEventByID} = require('../controllers/event-controller');

const router = express.Router();
const jsonParcer = express.json();

router.post('/events', jsonParcer, createEvent);
router.get('/events', jsonParcer, getEvents);
router.get('/events/:id', jsonParcer, getEventByID);
router.delete('/events/:id', jsonParcer, deleteEventByID);
router.put('/events/:id', jsonParcer, changeEventByID);

module.exports = router;
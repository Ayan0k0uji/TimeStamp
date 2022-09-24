// роуты для мероприятий

const express = require('express');
const {createEvent, getEvents, getEventByID} = require('../controllers/event-controller');

const router = express.Router();
const jsonParcer = express.json();

router.post('/events', jsonParcer, createEvent);
router.get('/events', jsonParcer, getEvents);
router.get('/events/:id', jsonParcer, getEventByID)

module.exports = router;
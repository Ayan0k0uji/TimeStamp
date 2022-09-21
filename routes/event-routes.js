// роуты для мероприятий

const express = require('express');
const {createEvent} = require('../controllers/event-controller');

const router = express.Router();
const jsonParcer = express.json();

router.post('/events', jsonParcer, createEvent);

module.exports = router;
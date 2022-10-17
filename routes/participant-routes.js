// роуты для участников

const express = require('express');
const { createParticipant } = require('../controllers/participant-controller');

const router = express.Router();
const jsonParcer = express.json();

router.post('/events/:id/participants', jsonParcer, createParticipant);

module.exports = router;
const { Participant } = require('../models/participant-model');
const { Event } = require('../models/event-model');

const createParticipant = async (req, res) => {
    try {
        if (!Boolean(await Event.findByPk(req.params.id))) {
            res.status(403).send({ status: false });
            return;
        }

        await Participant.create({
            Event_ID: req.params.id,
            User_Initials: req.body.User_Initials,
            Num_Of_Occupied_Place: req.body.Num_Of_Occupied_Place,
            User_email: req.body.User_email
        });
        res.status(200).send({ status: true })
    } catch (err) {
        res.status(500).send({ status: false });
    }
}

module.exports = { createParticipant };
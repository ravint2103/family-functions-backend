const express = require('express');
const router = express.Router();
const AllEvents = require('../models/AllEvents');


//GET ALL EVENTS
router.get('/', async (req, res) => {
    // res.send('we are on events');
    try {
        const allevents = await AllEvents.find();
        res.json(allevents);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT A EVENT
router.post('/', async (req, res) => {
    const allevents = new AllEvents({
        FunctionName: req.body.FunctionName,
        FunctionAddress: req.body.FunctionAddress,
        Status: req.body.Status
    });
    try {
        const savedEvent = await allevents.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC EVENT
router.get('/:eventId', async (req, res) => {
    try {
        const event = await AllEvents.findById(req.params.eventId);
        res.json(event);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE EVENT
router.patch('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await AllEvents.updateOne({ _id: req.params.eventId }, { $set: { FunctionName: req.body.FunctionName } });
        res.json(updatedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});


//DELETE EVENT
router.delete('/:eventId', async (req, res) => {
    try {
        const removedEvent = await AllEvents.remove({ _id: req.params.eventId });
        res.json(removedEvent);
    } catch (err) {
        res.json({ message: err });
    }
})


module.exports = router;
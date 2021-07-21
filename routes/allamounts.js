const express = require('express');
const router = express.Router();
const AllAmounts = require('../models/AllAmounts');


//GET ALL EVENTS
router.get('/', async (req, res) => {
    // res.send('we are on events');
    try {
        const allamounts = await AllAmounts.find();
        res.json(allamounts);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMIT A EVENT
router.post('/', async (req, res) => {
    const allamounts = new AllAmounts({
        Name: req.body.Name,
        Address: req.body.Address,
        Amount: req.body.Amount,
        Credit: req.body.Credit,
        Debit: req.body.Debit,
        FunctionName: req.body.FunctionName,
        AmountType: req.body.AmountType,
        Status: req.body.Status,
    });
    try {
        const savedEvent = await allamounts.save();
        res.json(savedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC EVENT
router.get('/:amountId', async (req, res) => {
    try {
        const event = await AllAmounts.findById(req.params.amountId);
        res.json(event);
    } catch (err) {
        res.json({ message: err });
    }
});

//UPDATE EVENT
router.patch('/:amountId', async (req, res) => {
    try {
        const updatedEvent = await AllAmounts.updateOne({ _id: req.params.amountId }, { $set: { FunctionName: req.body.FunctionName } });
        res.json(updatedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});


//DELETE EVENT
router.delete('/:amountId', async (req, res) => {
    try {
        const removedEvent = await AllAmounts.remove({ _id: req.params.amountId });
        res.json(removedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
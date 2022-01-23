const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const officeSchema = require('../schemas/office');
const Office = new mongoose.model('office', officeSchema);


router.get('/', async (req, res) => {
    try {
        const data = await Office.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newOffice = new Office(req.body);

    try {
        const result = await newOffice.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
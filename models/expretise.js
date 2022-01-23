const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const expertiseSchema = require('../schemas/expertise');
const Expertise = new mongoose.model('expertise', expertiseSchema);


router.get('/', async (req, res) => {
    try {
        const data = await Expertise.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newExpertise = new Expertise(req.body);

    try {
        const saveExpertise = await newExpertise.save();
        res.status(200).json(saveExpertise);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const teamSchema = require('../schemas/team');
const Team = new mongoose.model('team', teamSchema);


router.get('/', async (req, res) => {
    try {
        const data = await Team.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newTeam = new Team(req.body);

    try {
        const result = await newTeam.save();
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const storySchema = require('../schemas/story');
const Story = new mongoose.model('story', storySchema);


router.get('/', async (req, res) => {
    try {
        const data = await Story.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newStory = new Story(req.body);

    try {
        const saveStory = await newStory.save();
        res.status(200).json(saveStory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
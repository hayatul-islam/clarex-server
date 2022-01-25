const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const userSchema = require('../schemas/user');
const User = new mongoose.model('user', userSchema);


router.get('/', async (req, res) => {
    try {
        const data = await User.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newUser = new User(req.body);

    try {
        const result = await newUser.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/", async (req, res) => {

    await User.findOneAndUpdate(
        { email: req.body.email }, {
        $set: {
            role: 'admin'
        }
    },
        {
            new: true,
            useFindAndModify: false,
        }, // responsive
        (err) => {
            if (err) {
                res.status(500).json({
                    error: "There was server side error!"
                })
            } else {
                res.status(200).json({
                    message: "Make an admin successfully!"
                })
            }
        })
});

module.exports = router;
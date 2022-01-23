const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const blogSchema = require('../schemas/story');
const Blog = new mongoose.model('blog', blogSchema);


router.get('/', async (req, res) => {
    try {
        const data = await Blog.find({});
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: "There was server side error!"
        })
    }
});

router.post("/", async (req, res) => {
    const newBlog = new Blog(req.body);

    try {
        const result = await newBlog.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
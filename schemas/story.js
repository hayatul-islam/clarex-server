const mongoose = require('mongoose');

const story = mongoose.Schema(
    {
        title: { type: String },
        image: { type: String },
        about: { type: String },
        sub_title: { type: String },
        year: { type: String },
        description: { type: String },
    }
);

module.exports = story;
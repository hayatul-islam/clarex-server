const mongoose = require('mongoose');

const expertise = mongoose.Schema(
    {
        title: { type: String },
        sub_title: { type: String },
        description: { type: String },
        image: { type: String },
    }
);

module.exports = expertise;
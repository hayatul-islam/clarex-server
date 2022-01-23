const mongoose = require('mongoose');

const blog = mongoose.Schema(
    {
        title: { type: String },
        sub_title: { type: String },
        image: { type: String },
        category: { type: String },
        publish: { type: String },
        description: { type: String },
        sub_description: { type: String },
    }
);

module.exports = blog;
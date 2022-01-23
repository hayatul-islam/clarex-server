const mongoose = require('mongoose');

const blog = mongoose.Schema(
    {
        title: { type: String },
        sub_title: { type: String },
        description: { type: String },
        image: { type: String },
        publish: { type: String },
        category: { type: String },
        sub_description: { type: String },
    }
);

module.exports = blog;
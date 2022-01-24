const mongoose = require('mongoose');

const user = mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        role: { type: String },
    }
)

module.exports = user;
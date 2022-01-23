const mongoose = require('mongoose');

const office = mongoose.Schema(
    {
        name: { type: String },
        location: { type: String },
        phone: { type: Number },
    }
)

module.exports = office;
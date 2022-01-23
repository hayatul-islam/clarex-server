const mongoose = require('mongoose');

const team = mongoose.Schema(
    {
        name: { type: String },
        jub: { type: String },
        job_status: { type: String },
        location: { type: String },
        published: { type: String },
        image: { type: String },
        email: { type: String },
        linkedin: { type: String },
        about: { type: String },
        mission: { type: String },
        requirements: { type: String },
        benefit: { type: String },
    }
);

module.exports = team;
const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    
    claimnumber: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date,
    },
    Status: {
        type: String,
    }
});

module.exports = statusSchema;

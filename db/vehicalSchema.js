const mongoose = require('mongoose')

const vehicalSchema = new mongoose.Schema({
    model:{
        type: String,
    },

    year: {
        type: Number,
    },

    vehicalnumber: {
        type: String,
    }
});

module.exports = vehicalSchema;
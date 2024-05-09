const mongoose = require('mongoose')

const vehicalSchema = new mongoose.Schema({
    model:{
        type: String,
    },

    year: {
        type: Number,
    },

    photo : {
        type: String,
    }
});

module.exports = vehicalSchema;
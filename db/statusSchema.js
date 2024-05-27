const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    
    vehiclenumber: {
        type: String,
    },
    engine: {
        type: String,
    },
    brake: {
        type: String,
    },
    healthstatus:{
        type:String,
    }
});

module.exports = statusSchema;
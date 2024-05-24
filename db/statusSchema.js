const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    
    vehicalstatus: {
        type: String,
    },
    engine: {
        type: String,
    },
    brake: {
        type: String,
    }
});

module.exports = statusSchema;
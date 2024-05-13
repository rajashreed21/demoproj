const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    time: {
        types:String,
        
        
    }
});

module.exports = todoSchema;
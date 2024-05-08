const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    /* todoId: {
        type: String,
        required: true,
        unique: true
    }, */
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    time: {
        types:String,
        
    }
});

module.exports = todoSchema;
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    devicename:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})

module.exports = deviceSchema;
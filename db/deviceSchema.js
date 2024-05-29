const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
})

module.exports = deviceSchema;
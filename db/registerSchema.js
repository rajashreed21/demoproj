const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema({
    holdername:{
        type:String
    },
    vehicalnumber:{
        type:String
    },
    chassisnumber:{
        type:String
    },
    insurancenumber:{
        type:String
    },
    licensenumber:{
        type:String
    },
    
})

module.exports = registerSchema;
const mongoose=require('mongoose')

const claimSchema=new mongoose.Schema({
    holdername:{
        type:String
    },
    date:{
        type:String
    },
    mobilenumber:{
        type:String
    },
    policereport:{
        type:String
    },
    place:{
        type:String
    },

    damagedetails:{
        type:String
    },
    
})

module.exports = claimSchema;
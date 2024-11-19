const mongoose = require('mongoose')

const artworkSchema = new mongoose.Schema({
    title :{
        type:String,   
        required:true,
    },  
    category:{
        type:String,
        required:true,
   
    },
    artist:{
        type:String,
        required:true,
    },
    dimensions:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,

    },
    artimg:{
        type:String,
        required:true,

    },
   
    userId:{
        type:String,
        required:true, 
    }
})


const artwork= mongoose.model('artwork',artworkSchema);

module.exports=artwork
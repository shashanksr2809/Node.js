const mongoose = require('mongoose')



const loginInScema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String
    }

 })

const collection = new mongoose.model('DataLog',loginInScema)

module.exports = collection

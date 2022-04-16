const mongoose = require('mongoose')

const quizzSchema = new mongoose.Schema({
    question :{
        type:String
    },
    a1:{
        type:String
    },
    a2:{
        type:String
    },
    a3:{
        type:String
    },
    a4:{
        type:String
    },
    correct:{
        type:String
    }
})

module.exports = mongoose.model('quizzCollection',quizzSchema)
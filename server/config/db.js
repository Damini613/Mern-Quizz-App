const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://quizzapp:quizzapp@cluster0.pjkwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",()=>{
            console.log('mongo DB connected')
        })
    } catch (error) {
        console.log('error',error)
    }
}

module.exports = connectDB()
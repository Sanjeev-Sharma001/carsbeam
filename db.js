
const mongoose = require("mongoose");

function connectDb(){
    mongoose.connect('mongodb+srv://sanjeev:sanjeev@cluster0.g4rc4zb.mongodb.net/mynewcars',{useUnifiedTopology:true,useNewUrlParser:true})


    const connection = mongoose.connection
    connection.on('connected',()=>{
        console.log('Mongodb connection succesfull')
    })

    connection.on('error',()=>{
        console.log('Mongodb connection error')

    })
}
connectDb()
module.exports = mongoose
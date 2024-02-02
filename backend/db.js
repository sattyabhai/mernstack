const mongoose = require("mongoose");

const mongooseURI = "mongodb://localhost:27017";

const connetMongo = ()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("connect mongo")
    })
}


module.exports = connetMongo;
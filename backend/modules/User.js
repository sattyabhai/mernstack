const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    mail: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    uername: { type: String, required: true, unique:true },
    username: { type: String, required: true, unique:true },
    date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('user',userSchema);
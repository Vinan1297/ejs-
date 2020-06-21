const mongoose = require("mongoose");

//This is the Schema for user register and login
const userSchema = new mongoose.Schema({
    username: {type:String},
    email: {type:String},
    phone: {type:String},
    password: {type:String},
    dob: {type:Date}
});

module.exports = mongoose.model("User", userSchema);
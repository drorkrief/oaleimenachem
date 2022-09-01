const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email:String,
    role:String,
    son:String,
    password:String
});

module.exports = mongoose.model("User", userSchema,);// User is the collection in the db
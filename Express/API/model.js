const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
});

const User = mongoose.model('User',userSchema);
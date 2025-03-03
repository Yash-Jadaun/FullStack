const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Mongo deb se connect ho gaya');
}).catch((err)=>{
    console.log('Error:',err);
});
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    book_name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true 
    }
});

module.exports = mongoose.model('Posts', postSchema);
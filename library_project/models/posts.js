const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    book_author:{
        type:String,
        required:true
    },
    no_of_editions:{
        type:String,
        required:true 
    }
});

module.exports = mongoose.model('Posts', postSchema);
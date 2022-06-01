const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/route');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const port = 8000;
const DB_URL = 'mongodb+srv://pavi:pavi123@library.unfbj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB_URL , {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('DB connected');
    })
    .catch((err)=>{
        console.log(err);
    });
app.listen(port , ()=>{
    console.log(`app is running on ${port}`);
});
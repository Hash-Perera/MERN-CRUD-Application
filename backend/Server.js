//convert json format to server readable js object format
const bodyParser = require('body-parser');
const cors = require('cors');

// ! ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//configure server//
const express = require('express');
const app = express();

//midlewares
app.use(bodyParser.json());
app.use(cors());

//import routes
const postRoutes = require('./Routes/posts');

//route midleware
app.use(postRoutes);

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})

// ! ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//configure Database//
const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://Hashan:Hashan@merncrudapp.kr3d7yz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()=>{
    console.log("Db connected");
}).catch((err)=>{
    console.log('DB connection error', err)
})
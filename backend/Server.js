const express = require('express');

//configure Server
const app = express();
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
})
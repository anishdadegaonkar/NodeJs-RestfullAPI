const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const mongoose = require('mongoose');
PORT = 3000;

mongoose.connect("mongodb+srv://anujajhans:<password>@cluster0.94zh8ps.mongodb.net/users");
const database = mongoose.connection;

database.on('error', (error)=>{
    console.log(error);
});

database.once('connected', ()=> {
    console.log('Connected to database');
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port :${PORT}`);
});
app.use(express.json());
app.use('/api', router);
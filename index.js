require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');
const app = express();
const database = mongoose.connection;
const port = process.env.PORT || 3000;

app.use(express.json());



app.use('/', routes)

mongoose.connect(mongoString);

database.on('error', (error) => {
    console.log(error + 'err')
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(port, () => {
    console.log(`Server Started at ${3000}`)
})
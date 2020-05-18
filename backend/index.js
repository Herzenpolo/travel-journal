const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const index = require('./routes/index')
const app = express()

mongoose
    .connect('mongodb://localhost:27017/travel-journal', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


    app.use("/", index);

    app.listen(process.env.PORT || 5000)
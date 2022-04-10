const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const googleRouter = require('./routes/user.googlesignin');
const mongoose = require('mongoose');
const { response } = require('express');
mongoose.connect('mongodb+srv://Ram:ram0Ram@cluster0.hydgd.mongodb.net/BookmyMeal?retryWrites=true&w=majority')
    .then(result => {
        console.log('Database connected');
    }).catch(error => {
        console.log('Database not connected');
    })
const app = express();
app.use(cors());


// app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user", googleRouter);


app.listen(3000, () => {
    console.log('Server is running');

})
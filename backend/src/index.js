const express = require('express')
const cors = require('cors')
const Auth = require('./routes/auth')
const mongoose = require('mongoose')
const Working = require('./routes/working');

const app = express();

app.use(express.json())
app.use(cors())

app.use('/auth', Auth)
app.use('/working', Working)

mongoose.connect('mongodb://localhost:27017/', { dbName: "course_selling_application" });


app.listen(3000, (req, res) => {
    console.log('Server started on port 3000');
})

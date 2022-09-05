'use strict'
const express = require('express')
require('dotenv').config()
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3002

// Create a /person route using POST method within your server.js that will receive a persons name, age, gender


app.get('/', handleHome)
app.post('/person', createNewPerson)

function createNewPerson(req, res) {

    console.log(req.body)
    res.send(req.body.age + 5)

}


function handleHome(req, res) {
    res.send('HELLO WORLD')

}



app.listen(PORT, () => {
    console.log(`app work in ${PORT}`)
})
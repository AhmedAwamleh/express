const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


app.use(express.json())




const PORT = process.env.PORT || 3003



app.get('/', (req, res) => {
    console.log(req.query)
    // http://localhost:3009/?name=ahmed
    //result  { name: 'ahmed' }
    res.status(200).send("hello world")
})

app.post('/person', (req, res) => {
    const { name, age, gender } = req.body // get data (email and passord from body)
    const newAge = parseInt(age) + 5
    console.log(name, gender, newAge)

    res.status(201).json({ //for send data back with new thing like id 


        newAge: newAge.toString(),
        name: name

    })

})
// app.get('/api/employees/:name', (req, res) => {  //param use --> :
//     // http://localhost:3009/api/employees/ahmed
//     console.log(req.params)
//     // result in web ahmed
//     const { name } = req.params
//     res.send(name);
//     // result on server { id: 'ahmed' }
// })
// app.get('/api/employees/:firsname/:lastname', (req, res) => {
//     res.send(req.query);

// })





function start(port) {
    app.listen(PORT, () =>
        console.log(`this app work on${PORT} `)
    )
}


module.exports = {
    app: app,
    start: start
}
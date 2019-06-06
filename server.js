const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Hello World v4')
})

app.get('/env', (req,res)=>{
    res.json(process.env)
})
app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`)
})
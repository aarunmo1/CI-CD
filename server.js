const express = require('express')
const app = express()

var message = "Hackathon content"

app.get('/', (req, res)=>{
    res.send(message)
})

app.listen(8080, ()=>{
    console.log('Server started at port 3000')
})
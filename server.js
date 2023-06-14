const express = require('express');
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.listen(port, () =>{
    console.log(`servidor rodando no porte ${port}`)
})
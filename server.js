const express = require('express');
const app = express()
const port = 3000
const path = require('path');

// serve o usuario com os files da pasta publica, ou seja, basicamente redireciona o usuario para a home page
// app.use(express.static(path.join(__dirname, 'public')))


// diz para o express o folder em que os static files estao, para que o script.js possa ser carregado 
// de maneira adequada
app.use(express.static('public'))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.get('/teste', (req,res) =>{
    res.send('hello world')
    console.log('hello world')
})

app.listen(port, () =>{
    console.log(`servidor rodando no porte ${port}`)
})
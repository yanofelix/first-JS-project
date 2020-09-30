const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, anws, next) => {
    anws.send(database.getProducts()) // Converte pra json
})

app.get('/produtos/:id', (req, anws, next) => {
    anws.send(database.getProduct(req.params.id))
})

app.post('/produtos', (req, anws, next) => {
    const product = database.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    })
    anws.send(product) //JSON
})

app.put('/produtos/:id', (req, anws, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    anws.send(product) //JSON
})

app.listen(port, ()=> {
    console.log(`Servidor executando na porta ${port}`)
})
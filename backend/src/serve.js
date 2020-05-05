//importando o express
 
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-sz2mf.mongodb.net/semana09t?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

// GET, POST, PUT, DELETE

//req.query = Acessar query params(para filtros)
//req.params = Acessar route params (para edicao, delete)
//req.body = Acessar corpo da requisicao (para criacao, edicao)

app.use(express.json());
app.use(routes);

app.listen(3333);
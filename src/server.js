const express = require('express');
const { default: knex } = require('knex');
require('dotenv').config();
const app = express();



app.get('/user', (req, res) => {
  knex('users').then((results =>
    res.json(results)))
})


app.listen(process.env.SERVER_PORT, () =>{console.log('🚀  Server Runing')});
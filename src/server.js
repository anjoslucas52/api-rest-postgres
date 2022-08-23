require('dotenv').config();
const express = require('express')
const routes = require('./routes')
const app = express()

app.use(routes)


app.listen(process.env.SERVER_PORT, () =>{console.log('🚀  Server Runing')})
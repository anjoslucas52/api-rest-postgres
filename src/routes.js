const express = require('express');
const knex = require('./database')

const routes = express.Router()

const UserController = require('./Controllers/UserController')


routes.get('/users', UserController.list)
routes.post('/users', UserController.insert)

module.exports = routes


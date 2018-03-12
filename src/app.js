const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

require('./config/passport')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/', routes)



module.exports = app



const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use('/', routes)

app.get('/', (req, res) => res.send('hahahaha'))

module.exports = app

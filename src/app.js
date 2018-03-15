const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')

const keys = require('./config/keys')

mongoose.connect(keys.mongodbURI)

require('./model/Users')
require('./config/passport')
const routes = require('./routes')


const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/', routes)

module.exports = app

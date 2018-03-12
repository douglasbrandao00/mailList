const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const routes = require('./routes')
const keys = require('./config/keys')

const app = express()
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/', routes)

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.googleID,
      clientSecret:keys.google.googleSecret,
      callbackURL:'/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('acces token: ', accessToken)
      console.log('refresh token: ', refreshToken)
      console.log('profile: ', profile)
    }
  )
)

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

app.get('/auth/google/callback', passport.authenticate('google'))

module.exports = app



const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')

const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.googleID,
      clientSecret:keys.google.googleSecret,
      callbackURL:'/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId:profile.id})
        .then(existinUser => {
          if(existinUser) {
            console.log('hahahaha')
            done(null, existinUser)
          } else {
            new User({ googleId:profile.id })
              .save()
              .then(user => done(null, user))
          }
        })
        .catch(err => console.log(err))
    }
  )
)


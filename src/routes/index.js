const express = require('express')

const oauthGoogle = require('./oauthGoogle')

const router = express.Router()


router.get('/', (req, res) => res.send(`Wellcome :D`))
router.get('/user', (req, res) => res.send(req.user))
router.get('/logout', (req, res) => {
  req.logout()
  res.send(req.user)
})

router.use('/auth/google', oauthGoogle)

module.exports = router

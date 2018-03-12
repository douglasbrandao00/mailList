const express = require('express')

const oauthGoogle = require('./oauthGoogle')

const router = express.Router()


router.get('/', (req, res) => res.send(`hahahahahahahhaha`))
router.use('/auth/google', oauthGoogle)

module.exports = router

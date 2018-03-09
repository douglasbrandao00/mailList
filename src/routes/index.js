const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send(`welcome to hell's gate`))

module.exports = router;

const express = require('express')
const router = express.Router()
const helpers = require('../helpers')

router.post('/signin',helpers.signIn)
router.post('/signup',helpers.signUp)

module.exports = router
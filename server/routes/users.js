const express = require('express')
const router = express.Router({mergeParams: true})
const helpers = require('../helpers')

router.post('/',helpers.createMessage)

module.exports = router
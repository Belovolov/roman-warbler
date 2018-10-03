const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (req,res)=>{
    models.Message.find().sort({createdAt: 'desc'}).limit(10).populate('userId','username profileImageUrl')
        .then(messages=>res.status(200).json(messages))
        .catch(error => res.status(500).json(error))
})

module.exports = router
const models = require('../models')
const jwt = require('jsonwebtoken')

module.exports = function(req, res) {
    models.User.create(req.body).then(user=>{
        const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY)
        res.status(200).json({
            userId: user.id,
            username: user.username,
            profileImageUrl: user.profileImageUrl,
            token
        })
    })
    .catch(error => res.status(400).json(error))
}
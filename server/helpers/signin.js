const models = require('../models')
const jwt = require('jsonwebtoken')

module.exports = function(req, res) {
    models.User.findOne({email: req.body.email}).then(user=>{
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch) {
                const token = jwt.sign({userId: user.id}, process.env.SECRET_KEY)
                res.status(200).json({
                    userId: user.id,
                    username: user.username,
                    profileImageUrl: user.profileImageUrl,
                    token
                })
            }
            else {
                res.status(400).json({message: "Invalid user/password"})
            }
            
        })
    })
    .catch(error=>res.status(400).json({message: "Invalid user/password"}))
    //if found compare passswords
}
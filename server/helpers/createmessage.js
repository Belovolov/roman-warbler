const models = require("../models")

module.exports = function(req,res,next) {
    //res.json({body: req.body, params: req.params})
    models.Message.create({text: req.body.text, userId: req.params.id})
        .then(message=>{
            models.User.findById(req.params.id).then(user=>{
                    user.messages.push(message._id)
                    user.save().then(user=>{
                            return models.Message.findById(message._id).populate('userId','username profileImageUrl')
                        })
                        .then(message=>{
                            res.status(200).json(message)
                        }).catch(next)
                }).catch(next)
        }).catch(next)
}
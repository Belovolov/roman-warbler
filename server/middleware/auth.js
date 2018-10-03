const jwt = require('jsonwebtoken')

module.exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (decoded) next()
            else res.status(401).json({message: "You need to login first!"})
        })
    }
    catch(e) {
        console.log(e)
        res.status(401).json({message: "Thou need to login first!"})
    }
}

module.exports.ensureAuthorized = function(req,res,next) {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.decode(token, {complete: true});
    if (decoded.payload.userId===req.params.id)
        next()
    else {
        res.status(401).json({message: "Attemp of unauthorized access!"})
    }    
}
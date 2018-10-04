const mongoose = require('mongoose')
mongoose.set('debug', true)

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds121593.mlab.com:21593/heroku_8kt2szcm`, 
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
  })
    .then(()=>console.log("db connection successfull"))
    .catch(error=>console.log("db connection not successfull: " + error));

module.exports.User = require('./user')
module.exports.Message = require('./message')
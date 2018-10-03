const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/warbler-db', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
})
    .then(()=>console.log("db connection successfull"))
    .catch(error=>console.log("db connection not successfull: " + error));

module.exports.User = require('./user')
module.exports.Message = require('./message')
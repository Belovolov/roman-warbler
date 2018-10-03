require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const messagesRoute = require('./routes/messages')
const auth = require('./middleware/auth')

console.log('process.env: '+process.env.SECRET_KEY)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/auth', authRoute)
app.use('/api/user/:id/messages', auth.loginRequired, auth.ensureAuthorized, usersRoute)
app.use('/api/messages', messagesRoute)
app.get('/', function(req, res) {
    res.send("Use POST request to /api/auth/signup to signup")
})


const PORT = 8081 
app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`)
})
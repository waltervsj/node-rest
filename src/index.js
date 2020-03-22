const express = require('express')
const bodyParser = require('body-parser')
const question = require('./model/question')
const routes = require('./routes')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(routes)

app.listen(3000)

console.log("Listening on port 3000...")
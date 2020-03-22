const express = require('express')
const router = express.Router()
const users = require('./model/user')
const questions = require('./model/question')

router.get('/users', async (req, res) => {
    res.send(users)
})

router.get('/questions', async (req, res) => {
    res.send(questions)
})

module.exports = router
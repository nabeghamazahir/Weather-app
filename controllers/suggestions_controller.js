const express = require('express')
const router = express.Router()

const Top= require('../models/top')

router.get('/top', (req, res) => {
    Top
        .findAll()
        .then(tops => res.json(tops))
})

module.exports = router
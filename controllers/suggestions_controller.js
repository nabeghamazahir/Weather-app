const express = require('express')
const router = express.Router()

const Top= require('../models/top')
const Bottom= require('../models/bottom')
const Shoe= require('../models/shoe')

router.get('/top', (req, res) => {
    Top
        .findAll()
        .then(tops => res.json(tops))
})

router.get('/bottom', (req, res) =>{
    Bottom
        .findAll()
        .then(bottoms => res.json(bottoms))
})

router.get('/shoe', (req, res) =>{
    Shoe
        .findAll()
        .then(shoes => res.json(shoes))
})

module.exports = router
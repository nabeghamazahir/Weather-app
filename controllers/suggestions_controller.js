const express = require('express')
const router = express.Router()

const Top= require('../models/top')
const Bottom= require('../models/bottom')
const Shoe= require('../models/shoe')

router.get('/top', (req, res) => {
    const weather = req.query.weather;
    console.log('I am weather'+ weather)
    Top
        .findAll(weather)
        .then(tops => res.json(tops))
})

router.get('/bottom', (req, res) =>{
    const weather = req.query.weather;
    Bottom
        .findAll(weather)
        .then(bottoms => res.json(bottoms))
})

router.get('/shoe', (req, res) =>{
    const weather = req.query.weather;
    
    Shoe
        .findAll(weather)
        .then(shoes => res.json(shoes))
})

module.exports = router
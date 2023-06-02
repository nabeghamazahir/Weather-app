const express = require('express');
const router = express.Router();


const Top = require('../models/top');
const Bottom = require('../models/bottom');
const getWeather = require('../components/getWeather');


// routes
router.get('/', (req, res) => {
    const { latitude, longitude } = req.query;

    getWeather(latitude, longitude)
    .then(weather => {
      Promise.all([
        Top.findByWeather(weather),
        Bottom.findByWeather(weather)
      ])
})

module.exports = router;
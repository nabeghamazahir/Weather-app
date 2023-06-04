const express = require("express")
const router = express.Router()

const Collection = require('../models/collection_model');

router.post("/create", (req, res) => {
    const top_id = req.query.top_id;
    const bottom_id = req.query.btm_id;
    const shoe_id = req.query.shoe_id;
    const weather = req.query.weather;
    const name = req.body.collection_input;
    const user_id = 1;

    console.log(`${top_id} AND ${bottom_id} AND ${shoe_id} AND ${weather} AND ${name}`)


    Collection.create(name, weather, user_id, top_id, bottom_id, shoe_id)
        .then(name => res.json(name))
        .catch(error => {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
  });

  });


router.get('/', (req, res)=> {
    const user_id = 1;
    Collection.findCollectionByUserId(user_id).then(user_id => res.json(user_id))

}
);
  
module.exports = router
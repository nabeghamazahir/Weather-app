const db = require('../db/db')

const Collection = {

  create: (name, weather, user_id, top_id, bottom_id, shoe_id) => {
    const sql = `
          INSERT INTO collections(name, weather, user_id,top_id,bottom_id,shoe_id)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING *
        `
    console.log(sql)

    return db
          .query(sql, [name, weather, user_id,top_id,bottom_id,shoe_id])
          .then(dbRes => dbRes.rows[0])
  },
  findCollectionByUserId: user_id => {
    const sql = `
      SELECT * FROM collections
      WHERE user_id = $1
    `

    return db
      .query(sql, [user_id])
      .then(dbRes => dbRes.rows)
  },
  findCollectionByCollectionId: collection_id => {
    const sql = `
      SELECT * FROM collections
      WHERE id = $1
    `


    

    return db
      .query(sql, [collection_id])
      .then(dbRes => dbRes.rows)
  },
    
}

module.exports = Collection



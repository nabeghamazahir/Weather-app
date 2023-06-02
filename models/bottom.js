const db = require('../db/db')

const Bottom = {
    findAll: () =>{
        const sql = 'SELECT * FROM bottoms'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Bottom
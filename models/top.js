const db = require('../db/db')

const Top = {
    findAll: () =>{
        const sql = 'SELECT * FROM tops'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Top
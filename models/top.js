const db = require('../db/db')

const Top = {
    findAll: weather =>{
        const sql = `SELECT * FROM tops WHERE weather=$1`

        return db
            .query(sql, [weather])
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Top
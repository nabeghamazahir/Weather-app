const db = require('../db/db')

const Bottom = {
    findAll: weather =>{
        const sql = `SELECT * FROM bottoms WHERE weather=$1`

        return db
            .query(sql, [weather])
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Bottom
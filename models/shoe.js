const db = require('../db/db')

const Shoe =  {
    findAll: weather =>{
        const sql = `SELECT * FROM shoes WHERE weather=$1`

        return db 
            .query(sql, [weather])
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Shoe



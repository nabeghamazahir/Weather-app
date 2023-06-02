const db = require('../db/db')

const Shoe =  {
    findAll: () =>{
        const sql = 'SELECT * FROM shoes'

        return db 
            .query(sql)
            .then(dbRes => dbRes.rows)
    }
}

module.exports = Shoe
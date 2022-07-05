const db = require("../db")
const {NotFoundError} = require("../utils/errors")

class Store {

    static async listProducts() {
        const results = await db.query (`
            SELECT 
                p.id,
                p.name,
                p.image,
                p.description,
                p.price
            FROM products AS p
                JOIN users AS u on u.id = p.user_id 
        `)

       return results.rows
    }

    static async fetchProductById(productId) {
        const results = await db.query (`
            SELECT 
                p.id,
                p.name,
                p.image,
                p.description,
                p.price
            FROM products AS p
                JOIN users AS u on u.id = p.user_id 
            WHERE p.id = $1 
        `, [productId])

       const product = results.rows[0]
       if (!product) {
            throw new NotFoundError()
       }

       return product
    }

}


module.exports = Store
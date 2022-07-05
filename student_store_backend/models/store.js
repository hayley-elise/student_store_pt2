const db = require("../db")


class Store {

    static async listProducts(product) {
        const query = `
            SELECT * 
            FROM products
        `

        const result = await db.query(query, [product])
        const productList = result.rows[0]

        return productList
    }

}


module.exports = Store
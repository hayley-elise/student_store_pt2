const Store = require("../models/store")
const express = require("express")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const {productId} = req.params
        const products = await Store.listProducts()
        const product = await Store.fetchProductById(productId)
        return res.status(200).json({product})
    } catch(err) {
        next(err)
    }
})


module.exports = router
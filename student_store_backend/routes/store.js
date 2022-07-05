const Store = require("../models/store")
const express = require("express")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const list = await Store.listProducts(req)
        const product = res.json({list})
        return product["id"]
    } catch(err) {
        next(err)
    }
})


module.exports = router
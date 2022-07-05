const Order = require("../models/order")
const express = require("express")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        // listOrdersForUser
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        // createOrder
    } catch(err) {
        next(err)
    }
})


module.exports = router
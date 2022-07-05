const Order = require("../models/order")
const express = require("express")
const router = express.Router()
const security = require("./middleware/security")
const {BadRequestError, ForbiddenError} = require("../utils/errors")

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // listOrdersForUser
        const {user} = res.locals
    } catch(err) {
        next(err)
    }
})

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // createOrder
        const {user} = res.locals
    } catch(err) {
        next(err)
    }
})


module.exports = router
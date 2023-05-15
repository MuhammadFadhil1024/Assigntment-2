const express = require("express")
const router = express.Router()
const UserRouters = require("./userRouter")


router.use("/users", UserRouters)

module.exports = router
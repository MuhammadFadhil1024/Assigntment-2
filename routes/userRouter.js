const express = require("express")
const router = require('express').Router()
const usercontroller = require("../controller/usercontroller")
const authentication = require("../middleware/authentication");

router.post("/register", usercontroller.register)
router.use(authentication)
router.get("/", usercontroller.getAllUser)

module.exports = router
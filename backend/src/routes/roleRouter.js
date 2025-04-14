const express = require("express")
const { getRole } = require("../controllers/roleController")
const roleRout = express.Router

roleRout.get("/getRole", getRole)

module.exports = {
    roleRout
}
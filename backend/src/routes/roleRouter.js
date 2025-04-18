const express = require("express")
const roleRoute = express.Router()
const {getRolesController, createRoleController} = require("../controllers/roleController")

roleRoute.post("/role", createRoleController)
roleRoute.get("/role", getRolesController)
module.exports = roleRoute
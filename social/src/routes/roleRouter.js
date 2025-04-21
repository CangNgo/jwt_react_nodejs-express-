const express = require("express")
const roleRoute = express.Router()
const {getRolesController, createRoleController, getRoleIdOrNameController} = require("../controllers/roleController")

roleRoute.post("/role", createRoleController)
roleRoute.get("/role", getRolesController)
roleRoute.get("/role_id_or_name", getRoleIdOrNameController)
module.exports = roleRoute
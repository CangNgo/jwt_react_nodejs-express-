import { Router } from "express"
import { createRoleController, getRoleByIdController, getRoleIdOrNameController, getRolesController } from "../controllers/roleController"

const roleRoutes:Router = Router()
roleRoutes.post("/role", createRoleController)
roleRoutes.get("/role", getRolesController)
roleRoutes.get("/role/:id", getRoleByIdController)
roleRoutes.get("/role/role_id_or_name", getRoleIdOrNameController)

export default roleRoutes
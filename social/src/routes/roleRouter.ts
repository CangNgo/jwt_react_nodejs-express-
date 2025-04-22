import { Router } from "express";
import {
  createRoleController,
  getRoleIdOrNameController,
  getRolesController,
} from "../controllers/roleController";

const roleRoutes: Router = Router();
roleRoutes.post("/", createRoleController);
roleRoutes.get("/", getRolesController);
roleRoutes.get("/role_id_or_name", getRoleIdOrNameController);

export default roleRoutes;
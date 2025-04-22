import { Router } from "express";
import { fetchAllUser, getAllUserRoleController, getRoleUserController, getUserById, getUserBySelectController, getUserByUsernameAndEmailControler, postUser } from "../controllers/userController";


const userRoute:Router = Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// userRoute.get('/users', getUsersAPI);
// userRoute.post('/users', postCreateUserAPI);
// userRoute.put('/users', putUpdateUserAPI);
// userRoute.delete('/users', deleteUserAPI);

userRoute.get('/users',fetchAllUser);
userRoute.get("/get_user", getUserById)
userRoute.post('/user', postUser)
userRoute.get("/get_role_user", getRoleUserController)
userRoute.get("/get_all_role_user", getAllUserRoleController)
userRoute.get("/get_user_username_email", getUserByUsernameAndEmailControler)
userRoute.get("/get_user_select", getUserBySelectController)

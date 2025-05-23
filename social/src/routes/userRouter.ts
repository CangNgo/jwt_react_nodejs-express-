
import { Request, Response, Router } from "express";
import { fetchAllUser, getAllUserRoleController, getRoleUserController, getUserById, getUserBySelectController, getUserByUsernameAndEmailControler, postUser } from "../controllers/userController";


const userRoute: Router = Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// userRoute.get('/users', getUsersAPI);
// userRoute.post('/users', postCreateUserAPI);
// userRoute.put('/users', putUpdateUserAPI);
// userRoute.delete('/users', deleteUserAPI);

userRoute.get("/", (req: Request, res: Response) => {
    res.status(200).json("hello world")
})

userRoute.get('/users', fetchAllUser);
userRoute.get("/user/:id", getUserById)
userRoute.get("/user/get_role_user", getRoleUserController)
userRoute.get("/user/get_all_role_user", getAllUserRoleController)
userRoute.get("/user/get_user_username_email", getUserByUsernameAndEmailControler)
userRoute.get("/user/get_user_select", getUserBySelectController)

export default userRoute

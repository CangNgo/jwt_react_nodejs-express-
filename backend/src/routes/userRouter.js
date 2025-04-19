const express = require('express');
const { fetchAllUser, postUser, getRoleUserController, getAllUserRoleController, getUserById } = require('../controllers/userController');

const userRoute = express.Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// userRoute.get('/users', getUsersAPI);
// userRoute.post('/users', postCreateUserAPI);
// userRoute.put('/users', putUpdateUserAPI);
// userRoute.delete('/users', deleteUserAPI);

userRoute.get("/", (req, res) => {
    res.status(200).json("hello world")
})

userRoute.get('/users',fetchAllUser);
userRoute.get("/get_user", getUserById)
userRoute.post('/user', postUser)
userRoute.get("/get_role_user", getRoleUserController)
userRoute.get("/get_all_role_user", getAllUserRoleController)
module.exports = userRoute; //export default
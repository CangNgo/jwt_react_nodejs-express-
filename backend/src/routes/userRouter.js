const express = require('express');
const { fetchAllUser, postUser, getRoleUserController } = require('../controllers/userController');

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

userRoute.post('/user', postUser)
userRoute.get("/get_role_user", getRoleUserController)
module.exports = userRoute; //export default
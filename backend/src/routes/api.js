const express = require('express');

const routerAPI = express.Router();

// const { getUsersAPI, postCreateUserAPI,
//     putUpdateUserAPI, deleteUserAPI

// } = require('../controllers/apiController')


// routerAPI.get('/users', getUsersAPI);
// routerAPI.post('/users', postCreateUserAPI);
// routerAPI.put('/users', putUpdateUserAPI);
// routerAPI.delete('/users', deleteUserAPI);

routerAPI.get("/", (req, res) => {
    res.status(200).json("hello world")
})

module.exports = routerAPI; //export default
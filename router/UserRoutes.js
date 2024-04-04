const express = require('express');
const Routers = express.Router();
const {getAllUser,deleteUser,updateUser,getUserById} = require('../controller/UserController')

const {login,register,authenticateToken} = require('../controller/AuthController');


Routers.get("/getAllUser",getAllUser);
Routers.delete("/delete/user/:id",deleteUser);
Routers.patch("/update/user/:id",updateUser);

Routers.get('/getUser/:id',getUserById);

Routers.post("/login",login);
Routers.post("/register",register);
Routers.get("/protected",authenticateToken,(req,res) => {
    const user = req.user;
  res.json({ message: 'Protected route', user });
})

module.exports = Routers;
const express = require("express");
const router = express();

//CONTROLLERS
const { getUsers } = require("../controllers/adminController");
const { login } = require("../controllers/adminController");


//ROUTES
router.post("/login", login);
router.get(`/viewusers`, getUsers);

module.exports = { loginRouter: router, getUsersRouter: router };

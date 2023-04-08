const express = require("express");
const router = express.Router();
const homeController = require("../controllers/index.controller")

router.get('/',homeController.getHome);

router.get('/login', homeController.getLogin);

router.get('/register', homeController.getRegister);

module.exports = router;
const express = require("express");

const router = express.Router();

const dataController = require("../controller/data.controller");

const indexController = require("../controller/index.controller");

router.get("/header", indexController.getHeader);

router.get("/home", indexController.getHome);

router.get("/product", dataController.getProduct);

router.get("/addproduct", dataController.getAddProduct);

router.get("/footer", indexController.getFooter);

module.exports = router;
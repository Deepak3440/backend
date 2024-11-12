const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/test", AuthController.test);
module.exports = router;

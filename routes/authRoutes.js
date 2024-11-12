const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.get("/fuck", AuthController.fuck);
module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller")


 
router.get("/login", authController.renderLogin);

router.get("/hostregister", authController.renderhostregister);

router.get("/register", authController.renderRegister);

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/host", authController.renderHost)
router.get("/admin", authController.renderAdmin)

router.post("/hostregister", authController.host)

router.get("/booking", authController.renderBoking)

module.exports = router;
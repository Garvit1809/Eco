const router = require("express").Router();
const {register, login } = require('../Controllers/auth')
 
router.post("/register", register);
router.post("/login", login);

module.exports = router;
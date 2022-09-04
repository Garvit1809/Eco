const router = require("express").Router();
const {register, login, setProfile } = require('../Controllers/auth')
 
router.post("/register", register);
router.post("/profile/:id", setProfile)
router.post("/login", login);

module.exports = router;
const express = require('express');
const {signin, signup} = require('../controllers/user');

var router = express.Router();

// const LoginRoutes = () => {

    router.post("/signin", signin);
    router.post("/signup", signup);
// }

module.exports = router;
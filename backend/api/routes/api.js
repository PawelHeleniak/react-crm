const express = require('express')
const router = express.Router();

const user = require('../action/userAction');

router.get('/crm', user.getUser)
router.post('/login', user.loginUser)

//exportuje router
module.exports = router;
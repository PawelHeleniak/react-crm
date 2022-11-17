const express = require('express')
const router = express.Router();

const user = require('../action/userAction');
const data = require('../action/dataAction');

router.post('/login', user.loginUser)
router.post('/register', user.saveUser)
router.get('/crm', data.getData)
router.post('/crm', data.saveData)

//exportuje router
module.exports = router;
const express = require('express')
const router = express.Router();

const user = require('../action/userAction');
const data = require('../action/dataAction');

router.post('/login', user.loginUser)
router.post('/register', user.saveUser)

router.post('/saveData', data.saveData)
router.post('/userData', data.getData)
// router.post('/crm', data.saveData)

//exportuje router
module.exports = router;
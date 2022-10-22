const express = require('express')
const router = express.Router();

const user = require('../action/userAction');

router.get('/crm', user.getUser)
router.post('/crm', user.saveUser)

//exportuje router
module.exports = router;
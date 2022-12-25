const express = require('express')
const router = express.Router();

const user = require('../action/userAction');
const data = require('../action/dataAction');
const project = require('../action/projectAction');

//login page
router.post('/login', user.loginUser)
router.post('/register', user.saveUser)

//user data
router.post('/saveData', data.saveData)
router.post('/userData', data.getData)
router.post('/userAllData', data.getAllData)

//project
router.post('/getAllProjects', project.getAllProjects)
router.post('/addProject', project.saveProject)
router.post('/testProject', project.testProject)

//task
// router.post('/addTask', project.addTask)

//exportuje router
module.exports = router;
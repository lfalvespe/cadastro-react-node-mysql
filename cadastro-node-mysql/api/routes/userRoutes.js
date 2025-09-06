const express = require('express')
const UserController = require('../controllers/UserController')

const router = express.Router()

//routes
router.get('/', UserController.showUsers)
router.post('/create', UserController.createUser)
router.get('/:id', UserController.showUser)
router.post('/delete', UserController.deletUser)
router.post('/update', UserController.updateUser)

module.exports = router
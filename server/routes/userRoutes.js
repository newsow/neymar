const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const courseController = require('../controllers/courseController')
const eventController = require('../controllers/eventController')

router.post('/registration',userController.registration)
router.post('/login',userController.login)
router.get('/get',userController.getUsers)

router.post('/create/teacher',courseController.createTeacher)
router.post('/create/course',courseController.create)
router.post('/delete/course',courseController.delete)
router.get('/courses',courseController.getAll)
router.get('/course/:id',courseController.getOne)

module.exports = router
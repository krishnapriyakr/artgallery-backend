const express = require('express')
const router = new express.Router()

const userController=require('../Controller/userController')
const jwtMiddleware = require('../middileware/jwtMiddileware')
const multerConfig = require('../middileware/muilterMiddileware')
const artController=require('../Controller/artController')

//register api
router.post('/user/register', userController.register)

//login 
router.post('/user/login', userController.login)

//upload art
router.post('/artwork/add', jwtMiddleware, multerConfig.single('artimg'),artController .uploadArt);


//getAllartworks
router.get('/artwork/all', jwtMiddleware, artController.getallarts);


module.exports=router
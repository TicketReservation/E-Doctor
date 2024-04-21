const express = require('express');
const router = express.Router();
const { register, login,getAllUsers } = require('../controllers/login');
const verifyToken=require('./../middelware/index')
router.post('/register', register);
router.post('/login', login);
router.get('/all', getAllUsers);


module.exports = router;

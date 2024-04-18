const express = require('express');
const router = express.Router();
const { register, login ,finAllDoc} = require('../controllers/login');
const verifyToken=require('./../middelware/index')
router.post('/register', register);
router.post('/login', login);
router.get("/allDoc",finAllDoc)


module.exports = router;
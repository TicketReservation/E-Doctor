const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/login');
const verifyToken=require('../controllers/middelware')

router.post('/register', register);
router.post('/login', login);

module.exports = router;

const express = require('express');
const router = express.Router();

const { register, login ,finAllDoc,findDocByNameAndSpeciality,getCurrentUser} = require('../controllers/login');


const verifyToken=require('./../middelware/index')
router.post('/register', register);
router.post('/login', login);
router.get("/allDoc",finAllDoc)
router.get("/filter/:id(\\d+)?/:name?", findDocByNameAndSpeciality);
router.get("/currentUser",verifyToken);
module.exports = router;
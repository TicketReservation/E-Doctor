const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { register, login ,finAllDoc,findDocByName,getBySpeciality} = require('../controllers/login');
=======

const { register, login ,finAllDoc} = require('../controllers/login');
>>>>>>> 2c7278e10356c8a130e685a42b40bb05c58aeb78
const verifyToken=require('./../middelware/index')
router.post('/register', register);
router.post('/login', login);
router.get("/allDoc",finAllDoc)
router.get("/:name",findDocByName)
router.get("/spec/:id",getBySpeciality    )



module.exports = router;
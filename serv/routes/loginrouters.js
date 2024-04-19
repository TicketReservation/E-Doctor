const express = require('express');
const router = express.Router();

const { register, login ,finAllDoc} = require('../controllers/login');
const verifyToken=require('./../middelware/index')
router.post('/register', register);
router.post('/login', login);
router.get("/allDoc",finAllDoc)
// router.get("/:name",findDocByName)
// router.get("/spec/:id",getBySpeciality    )



module.exports = router;
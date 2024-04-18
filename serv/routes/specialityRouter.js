const express = require('express');
const router = express.Router();
const speciality=require("../controllers/specialityController");
router.get('/speciality',speciality.getSpeciality);

module.exports = router;
const express = require('express');
const router = express.Router();
const RatingsComments = require('../controllers/ratingComments.controller');

router.get('/user/:userId', RatingsComments.getReviewsByUserId);
router.post('/add', RatingsComments.addReview);

router.get('/doctor/:doctorId', RatingsComments.getReviewsByDoctorId);
router.get('/all', RatingsComments.getAll);




module.exports = router;

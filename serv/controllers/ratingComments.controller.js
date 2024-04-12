
const {RatingsComments} = require('../database-mysql/index');

// Get all reviews with user ID
const getReviewsByUserId = async (req, res) => {
    const UserId = req.params.userId;
    try {
        const userReviews = await RatingsComments.findAll({ where: { UserId } });
        res.json(userReviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};
const getAll = async (req, res) => {
    try {
        const userReviews = await RatingsComments.findAll({ });
        res.json(userReviews);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

// Get all reviews with doctor ID


const getReviewsByDoctorId = async (req, res) => {
    const DoctorId = req.params.doctorId;
    try {
        const doctorReviews = await RatingsComments.findAll({ where: { DoctorId } });
        res.json(doctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

// Add a new review
const addReview = async (req, res) => {
    const { UserId, rating, review,name,imageSrc } = req.body;
    try {
        const newReview = await RatingsComments.create({ UserId, rating, review,name,imageSrc});
        res.json(newReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to add review' });
    }
};

module.exports = {
    getReviewsByUserId,
    getReviewsByDoctorId,
    addReview,
    getAll
};

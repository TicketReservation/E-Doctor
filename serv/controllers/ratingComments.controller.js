
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Get all reviews with user ID
const getReviewsByUserId = async (req, res) => {
    const UserId = req.params.userId;
    try {
        const userReviews = await prisma.findAll({ where: { UserId } });
        res.json(userReviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};
const getAll = async (req, res) => {
    try {
        const userReviews = await prisma.findAll({ });
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
        const doctorReviews = await prisma.ratingsComments.findAll({ where: { DoctorId } });
        res.json(doctorReviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};

// Add a new review
const addReview = async (req, res) => {
    const add = req.body; // Changed UserId to userId
    try {
        const newReview = await prisma.ratingsComments.create(add); // Changed UserId to userId
        res.status(201).json(newReview); // Changed to status 201 for successful creation
    } catch (error) {
        console.error(error); // Logging the error to console
        res.status(500).json({ error: 'Failed to add review' }); // Sending error response to client
    }
};


module.exports = {
    getReviewsByUserId,
    getReviewsByDoctorId,
    addReview,
    getAll
};

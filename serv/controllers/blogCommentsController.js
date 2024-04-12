const { Comment } = require('../database-mysql/index');

const getAllComments = async (req, res) => {
    try {
        const Comments = await Comment.findAll();
        res.status(200).json(Comments);
    } catch (error) {
        console.error('Error fetching Comments:', error);
        res.status(500).json({ error: 'Failed to fetch Comments' });
    }
}

const getcommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findOne({ where: { id } });
        if (comment) {
            res.status(200).json(comment);
        } else {
            res.status(404).json({ error: 'comment not found' });
        }
    } catch (error) {
        console.error('Error fetching comment:', error);
        res.status(500).json({ error: 'Failed to fetch comment' });
    }
}

const createcomment = async (req, res) => {
    try {
        const body = req.body;
        const comment = await Comment.create(body);
        res.status(201).json(comment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
}
const updatecomment = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const comment = await Comment.findOne({ where: { id } });
        if (comment) {
            await comment.update(body);
            res.status(200).json(comment);
        } else {
            res.status(404).json({ error: 'comment not found' });
        }
    } catch (error) {
        console.error('Error updating comment:', error);
        res.status(500).json({ error: 'Failed to update comment' });
    }
}

const deletecomment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findOne({ where: { id } });
        if (comment) {
            await comment.destroy();
            res.status(200).json({ message: 'comment deleted successfully' });
        } else {
            res.status(404).json({ error: 'comment not found' });
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        res.status(500).json({ error: 'Failed to delete comment' });
    }
}

module.exports = {
    getAllComments,
    createcomment,
    getcommentById,
    updatecomment,
    deletecomment

}

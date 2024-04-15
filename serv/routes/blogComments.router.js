
const express = require('express');
const router = express.Router();
const CommentsController = require('../controllers/blogCommentsController.js');

router.get('/all', CommentsController.getAllComments);

router.get('/:id', CommentsController.getcommentById);

router.post('/', CommentsController.createcomment);

router.put('/:id', CommentsController.updatecomment);

router.delete('/:id', CommentsController.deletecomment);

module.exports = router;

const router = require('express').Router();
const conversation= require('../controllers/Conversation')

router.post('/',conversation.createMessage);
router.get('/',conversation.getRoomsByUserId)
router.get('/:roomId',conversation.getAllMessageByRoomId)
router.delete('/:id',conversation.remove)
router.put('/:id',conversation.put)

module.exports = router;
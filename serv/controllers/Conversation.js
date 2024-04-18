const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    createMessage: async function(req, res) {
        try {
            const post = await prisma.message.create({
                data: req.body
            });
            res.status(200).send(post);
        } catch (error) {
            throw error;
        }
    },
    getRoomsByUserId: async function(req, res) {
        try {
            const get = await prisma.room.findMany({});
            res.status(200).send(get);
        } catch (error) {
            throw error;
        }
    },
    getAllMessageByRoomId: async function(req, res) {
        try {
            const find = await prisma.message.findMany({
                where: {
                    roomId: req.params.roomId
                }
            });
            res.status(200).send(find);
        } catch (error) {
            throw error;
        }
    },
    put: async function(req, res) {
        try {
            const update = await prisma.conversation.update({
                where: {
                    id: req.params.id
                },
                data: req.body
            });
            res.status(200).send(update);
        } catch (error) {
            throw error;
        }
    },
    remove: async function(req, res) {
        try {
            const remove = await prisma.message.delete({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).send(remove);
        } catch (error) {
            throw error;
        }
    }
}

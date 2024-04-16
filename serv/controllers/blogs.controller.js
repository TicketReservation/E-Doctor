const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching Blogs:', error);
        res.status(500).json({ error: 'Failed to fetch Blogs' });
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await prisma.blog.findUnique({ where: { id: parseInt(id) } });
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error fetching Blog:', error);
        res.status(500).json({ error: 'Failed to fetch Blog' });
    }
}

const createBlog = async (req, res) => {
    try {
        const body = req.body;
        const blog = await prisma.blog.create({ data: body });
        res.status(201).json(blog);
    } catch (error) {
        console.error('Error creating Blog:', error);
        res.status(500).json({ error: 'Failed to create Blog' });
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const blog = await prisma.blog.findUnique({ where: { id: parseInt(id) } });
        if (blog) {
            await prisma.blog.update({ where: { id: parseInt(id) }, data: body });
            res.status(200).json(blog);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error updating Blog:', error);
        res.status(500).json({ error: 'Failed to update Blog' });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await prisma.blog.findUnique({ where: { id: parseInt(id) } });
        if (blog) {
            await prisma.blog.delete({ where: { id: parseInt(id) } });
            res.status(200).json({ message: 'Blog deleted successfully' });
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (error) {
        console.error('Error deleting Blog:', error);
        res.status(500).json({ error: 'Failed to delete Blog' });
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}

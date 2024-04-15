const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const product = await prisma.product.create({ data: body });
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if (product) {
            await prisma.product.update({ where: { id: parseInt(id) }, data: body });
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
        if (product) {
            await prisma.product.delete({ where: { id: parseInt(id) } });
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

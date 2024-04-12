const { Product } = require('../database-mysql/index');

const getAllproducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
}

const getproductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ where: { id } });
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
}

const createproduct = async (req, res) => {
    try {
        const body = req.body;
        const product = await Product.create(body);
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
}
const updateproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await Product.findOne({ where: { id } });
        if (product) {
            await product.update(body);
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'product not found' });
        }
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
}

const deleteproduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ where: { id } });
        if (product) {
            await product.destroy();
            res.status(200).json({ message: 'product deleted successfully' });
        } else {
            res.status(404).json({ error: 'product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ error: 'Failed to delete product' });
    }
}

module.exports = {
    getAllproducts,
    createproduct,
    getproductById,
    updateproduct,
    deleteproduct

}

import Products from "../models/product_Model.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        await Products.create(req.body);
        res.json({
            "message": "Product Created"
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const products = await Products.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(products[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Products.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Update"
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}
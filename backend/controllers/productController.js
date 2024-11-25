const Product = require("../models/product");


exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos.", error });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado." });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar o produto.", error });
    }
};

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rota para listar todos os produtos
router.get("/", productController.getAllProducts);

// Rota para buscar detalhes de um produto
router.get("/:id", productController.getProductById);

module.exports = router;

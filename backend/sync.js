const sequelize = require("./config/database");
const Product = require("./models/product");

(async () => {
    try {
        await sequelize.sync({ force: true });

        // Inserir dados de exemplo
        await Product.bulkCreate([
            {
                name: "Anel de Ouro",
                description: "Anel de ouro 18k com diamantes.",
                price: 2500.0,
                image: "https://via.placeholder.com/150",
            },
            {
                name: "Brinco de Prata",
                description: "Brinco de prata com zircônias.",
                price: 150.0,
                image: "https://via.placeholder.com/150",
            },
            {
                name: "Colar de Pérolas",
                description: "Colar com pérolas naturais.",
                price: 900.0,
                image: "https://via.placeholder.com/150",
            },
        ]);

        console.log("Dados inseridos com sucesso!");
        process.exit();
    } catch (error) {
        console.error("Erro ao sincronizar o banco:", error);
        process.exit(1);
    }
})();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Habilitando CORS para permitir requisições do frontend
app.use(cors());

// Simulando um banco de dados de produtos
app.get('/products', (req, res) => {
  const products = [
      { id: 1, name: 'Anel de Ouro', price: 100.5, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Brincos de Prata', price: 50.75, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Colar de Pérola', price: 30.25, image: 'https://via.placeholder.com/150' },
  ];
  console.log('Produtos enviados:', products);  // Verifique os produtos no backend
  res.json(products);
});


// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

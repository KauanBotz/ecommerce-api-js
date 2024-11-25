import React, { useEffect, useState } from 'react';
import '../css/Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => {
        console.log('Produtos recebidos:', data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products.map((product) => {
          const formattedPrice = product.price
            ? product.price.toFixed(2)
            : 'Preço indisponível';

          return (
            <div key={product.id}>
              <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
              <h2>{product.name}</h2>
              <p>Preço: R$ {formattedPrice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

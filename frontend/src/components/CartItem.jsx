import React from 'react';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>R$ {item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remover</button>
    </div>
  );
}

export default CartItem;

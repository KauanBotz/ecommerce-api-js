import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h1>Seu Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={removeFromCart} />
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button onClick={clearCart}>Finalizar Compra</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

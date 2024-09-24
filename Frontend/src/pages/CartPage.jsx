import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css'; 

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice, addToCart } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.name} /> 
                <div>
                  {item.name} - ${item.price.toFixed()} (Cantidad: {item.count})
                </div>
                <div>
                  <button onClick={() => removeFromCart(item.id)}> - </button>
                  <button onClick={() => addToCart(item)}> + </button> 
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${getTotalPrice().toFixed()}</h2> 
        </>
      )}
    </div>
  );
};

export default CartPage;
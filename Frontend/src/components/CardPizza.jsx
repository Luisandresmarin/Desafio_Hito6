import React from 'react';
import { useCart } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  const handleError = (e) => {
    e.target.src = 'ruta/a/imagen/predeterminada.jpg'; // Cambia la imagen predeterminada en la tarjeta (acuerdate!)
  };

  return (
    <div className="card-pizza">
      <img src={pizza.img} alt={pizza.name} onError={handleError} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li> // identificador único
        ))}
      </ul>
      <p>Precio: ${pizza.price.toFixed(0)}</p>
      <button onClick={() => addToCart(pizza)}>Añadir al Carrito</button>
    </div>
  );
};

export default CardPizza;
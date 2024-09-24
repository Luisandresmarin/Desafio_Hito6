import React from 'react';


const Pizza = ({ pizza }) => {
  return (
    <div className="pizza-card">
      <h2>{pizza.name}</h2>
      <p>Precio: ${pizza.price.toFixed(2)}</p>
      {pizza.image && <img src={pizza.image} alt={pizza.name} className="pizza-image" />}
    </div>
  );
};

export default Pizza;
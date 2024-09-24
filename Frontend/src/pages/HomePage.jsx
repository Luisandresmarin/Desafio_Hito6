import React from 'react';
import { usePizza } from '../context/PizzaContext';
import CardPizza from '../components/CardPizza';

const Home = () => {
  const { pizzas, error } = usePizza();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='titulo-principal'>
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))
        ) : (
          <p>No hay pizzas disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Home;
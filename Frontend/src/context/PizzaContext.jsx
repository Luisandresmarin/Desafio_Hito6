import React, { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, error }}>
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizza = () => {
  return useContext(PizzaContext);
};

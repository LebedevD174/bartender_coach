import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { Drink } from './types/drink';
import { loadDrinks } from './drinksSlice';

function DrinksPopular(): JSX.Element {
  const dispatch = useAppDispatch();

  const drinksPop: Drink[] = useAppSelector((store) => store.drinks.drinks);
  const firstEightDrinks = drinksPop.slice(0, 4);
  useEffect(() => {
    dispatch(loadDrinks()).catch(console.log);
  }, []);
  return (
    <div className="popular_drinks">
      <p>Популярные ингредиенты</p>
      <div className="container">
        {firstEightDrinks.map((drink) => (
          <div key={drink.id} className="card_drink">
            <img src={drink.img} alt={drink.title} />
            <h3>{drink.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/allDrinks">{'все ингредиенты ->'}</Link>
    </div>
  );
}

export default DrinksPopular;

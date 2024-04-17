import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { Drink } from './types/drink';
import { loadDrinks } from './drinksSlice';

function DrinksPopular(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
  const drinksPop: Drink[] = useAppSelector((store) => store.drinks.drinks);
  const firstEightDrinks = drinksPop.slice(0, 4);
  useEffect(() => {
    dispatch(loadDrinks()).catch(console.log);
  }, []);
  return (
    <div className="popular_drinks">
      <p className="categoryPopular">Популярные ингредиенты</p>
      <div className="container">
        {firstEightDrinks.map((drink) => (
          <Link key={drink.id} to={`/drinks/${drink.id}`}>
            <div className="card_drink">
              <img src={drink.img} alt={drink.title} />
              <h3 className="drink_title">{drink.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {user && (
        <Link to="/drinks">
          <p className="all_cards">все напитки →</p>
        </Link>
      )}
    </div>
  );
}

export default DrinksPopular;

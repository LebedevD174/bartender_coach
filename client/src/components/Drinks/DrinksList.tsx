import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import FilterDrinks from './components/FilterDrinks';
import type { Drink } from './types/drink';
import { loadDrinks } from './drinksSlice';

function DrinksList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ category: 0 });
  const drinksArr: Drink[] = useAppSelector((store) => store.drinks.drinks);
  const [drinks, setDrinks] = useState(drinksArr);

  useEffect(() => {
    dispatch(loadDrinks()).catch(console.log);
  }, []);

  useEffect(() => {
    if (+filter.category > 0) {
      const res = drinksArr.filter((drink: Drink) => drink.category_id === +filter.category);
      setDrinks(res);
    } else {
      setDrinks(drinksArr);
    }
  }, [drinksArr, filter]);

  return (
    <div className="DrinksList">
      <FilterDrinks setFilter={setFilter} />
      <div className="container">
        {drinks.map((drink) => (
          <Link to={`/drinks/${drink.id}`}>
            <div key={drink.id} className="card_drink">
              <img src={drink.img} alt={drink.title} />
              <p>{drink.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DrinksList;

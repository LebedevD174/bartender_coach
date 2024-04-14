import React, { useEffect, useState } from 'react';
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
      {drinks.map((drink) => (
        <div key={drink.id} className="card_cocktail">
          <img src={drink.img} alt={drink.title} />
          <p>{drink.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DrinksList;

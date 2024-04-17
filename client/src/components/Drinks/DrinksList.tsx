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

 const [searchQuery, setSearchQuery] = useState('');

 useEffect(() => {
    dispatch(loadDrinks()).catch(console.log);
 }, []);

 useEffect(() => {
    let filteredDrinks = drinksArr;

    if (+filter.category > 0) {
      filteredDrinks = filteredDrinks.filter((drink: Drink) => drink.category_id === +filter.category);
    }

    if (searchQuery) {
      filteredDrinks = filteredDrinks.filter((drink: Drink) =>
        drink.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDrinks(filteredDrinks);
 }, [drinksArr, filter, searchQuery]);

 return (
    <div className="DrinksList">
      <FilterDrinks setFilter={setFilter} onSearch={setSearchQuery} /> 
      <div className="container">
        {drinks.map((drink) => (
          <Link key={drink.id}  to={`/drinks/${drink.id}`}>
            <div className="card_drink">
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
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Drink, DrinkParams } from './types/drink';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { loadDrinks } from './drinksSlice';

function DrinkPage(): JSX.Element {

  const { drinkId } = useParams<DrinkParams>();
  const dispatch = useAppDispatch();
  const drinks: Drink[] = useAppSelector((store) => store.drinks.drinks);
  const navigate = useNavigate();
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    dispatch(loadDrinks())
      .then(() => {
        const id = Number(drinkId);
        const foundDrink = drinks.find((drink) => drink.id === id);
        setDrink(foundDrink || null);
      })
      .catch(console.error);
  }, [dispatch, drinkId, drinks]);
  return (
    <div className="DrinkItem" key={drink?.id}>
      <p>{drink?.title}</p>
      <img src={drink?.img} alt={drink?.title} />
      <p>{drink?.category_id}</p>
      <p>{drink?.description}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default DrinkPage;

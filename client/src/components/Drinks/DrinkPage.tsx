import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '@reduxjs/toolkit/query';
import type { Drink } from './types/drink';
import { useAppDispatch } from '../../app/redux/store';
import { loadDrinks } from './drinksSlice';

function DrinkPage(): JSX.Element {
  const { drinkId }: { drinkId: string } = useParams();
  const dispatch = useAppDispatch();
  const drinks: Drink[] = useSelector((store: RootState) => store.drinks.drinks);

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
    </div>
  );
}

export default DrinkPage;

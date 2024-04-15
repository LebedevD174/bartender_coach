import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '@reduxjs/toolkit/query';
import type { Drink } from './types/drink';

function DrinkPage(): JSX.Element {
  const { drinkId }: { drinkId: string } = useParams();
  const drinks: Drink[] = useSelector((store: RootState) => store.drinks.drinks);
  let drink: Drink | undefined;
  if (drinkId) {
    const id = Number(drinkId);
    drink = drinks.find((drink) => drink.id === id);
  }

  return (
    <div className="DrinkItem" key={drink.id}>
      <p>{drink.title}</p>
      <img src={drink.img} alt={drink.title} />
      <p>{drink.category_id}</p>
      <p>{drink.description}</p>
    </div>
  );
}

export default DrinkPage;

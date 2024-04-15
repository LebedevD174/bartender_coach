import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import type { Drink } from './types/drink';

function DrinkPage(): JSX.Element {
  const useParams = useParams();
  return (
    <div className="DrinkItem">
      <p>{drink.title}</p>
      <img src={drink.img} alt={drink.title} />
      <p>{drink.category_id}</p>
      <p>{drink.description}</p>
    </div>
  );
}

export default DrinkPage;

import React from 'react';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/redux/store';

function IngredientsPopular(): JSX.Element {
  const ingredientsPop = useAppSelector((store) => store.ingredients.ingredients);
  const firstEightIngredients = ingredientsPop.slice(0, 8);
  return (
    <div className="popular_ingredients">
      <p>Популярные ингредиенты</p>
      <div className="container">
        {firstEightIngredients.map((ingredient) => (
          <div key={ingredient.id} className="card_ingredient">
            <img src={ingredient.img} alt={ingredient.title} />
            <h3>{ingredient.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/allDrinks">{'все ингредиенты ->'}</Link>
    </div>
  );
}

export default IngredientsPopular;

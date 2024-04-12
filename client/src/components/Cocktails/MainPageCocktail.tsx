import React from 'react';
import CocktailPopular from './components/cocktailPopular';
import IngredientsPopular from './components/ingredientsPopular';

function MainPageCocktail(): JSX.Element {
  return (
    <div className="MainPage">
      <CocktailPopular />
      <IngredientsPopular />
    </div>
  );
}

export default MainPageCocktail;

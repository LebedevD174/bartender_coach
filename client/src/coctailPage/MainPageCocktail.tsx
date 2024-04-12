import React from 'react';
import CocktailPopular from './cocktailPopular';
import IngredientsPopular from './IngredientsPopular';

function MainPageCocktail(): JSX.Element {
  return (
    <div className="MainPage">
      <CocktailPopular />
      <IngredientsPopular />
    </div>
  );
}

export default MainPageCocktail;

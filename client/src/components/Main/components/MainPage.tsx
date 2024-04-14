import React from 'react';
import CocktailPopular from '../../Cocktails/components/cocktailPopular';
import IngredientsPopular from '../../Ingredients/ingredientsPopular';

function MainPageCocktail(): JSX.Element {
  return (
    <div className="MainPage">
      <CocktailPopular />
      {/* <IngredientsPopular /> */}
    </div>
  );
}

export default MainPageCocktail;

import React from 'react';
import CocktailPopular from '../../Cocktails/components/cocktailPopular';
import DrinksPopular from '../../Drinks/drinksPopular';

function MainPageCocktail(): JSX.Element {
  return (
    <div className="MainPage">
      <div className="Main">
      </div>
      <CocktailPopular />
      <DrinksPopular />
    </div>
  );
}

export default MainPageCocktail;

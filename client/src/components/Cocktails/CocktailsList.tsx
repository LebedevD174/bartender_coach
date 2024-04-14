import React from 'react';
import FilterCocktails from './components/FilterCocktails';

function CocktailsList(): JSX.Element {
  return (
    <div className="CocktailsList">
      <FilterCocktails />
    </div>
  );
}

export default CocktailsList;

import React, { useEffect, useState } from 'react';
import FilterCocktails from './components/FilterCocktails';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { Cocktail } from './types/cocktail';
import { loadCocktails } from './cocktailsSlice';

function CocktailsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ category: null, feature: null });
  const cocktails: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const filterCocktailsByFeature = (cocktails, filter) =>
    cocktails.filter((cocktail) =>
      cocktail.CocktailFeatures.some((feature) => feature.Feature.id === filter),
    );

  // Применение фильтра
  const filteredCocktails = filter.feature
    ? filterCocktailsByFeature(cocktails, filter.feature)
    : cocktails;

  useEffect(() => {
    if (filter.feature !== null) {
      filterCocktailsByFeature(cocktails, filter.feature);
    }
  }, [filter]);

  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, []);
  return (
    <div className="CocktailsList">
      <FilterCocktails setFilter={setFilter} />
      {cocktails.map((cocktail) => (
        <div key={cocktail.id} className="card_cocktail">
          <img src={cocktail.img} alt={cocktail.title} />
          <p>{cocktail.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CocktailsList;

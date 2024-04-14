import React, { useEffect, useState } from 'react';
import FilterCocktails from './components/FilterCocktails';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { Cocktail, CocktailFormula } from './types/cocktail';
import { loadCocktails } from './cocktailsSlice';

function CocktailsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ category: null, feature: null });
  const cocktailsArr: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const [cocktails, setCocktails] = useState(cocktailsArr);
 function filterCocktailsByFeature(filter:{category: string | number, feature: string | number}): void {
  if (filter.feature === 0) {setCocktails(cocktailsArr)}
  const res = cocktailsArr.filter((cocktail) => {
    return cocktail.CocktailFeatures.some((el) => el.feature_id === +filter.feature)})
    console.log(res);
  setCocktails(res)
 }
 
  useEffect(() => {
    if (filter.feature !== 0) {
      filterCocktailsByFeature(filter)
    }

  }, [filter]);

  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, []);
  return (
    <div className="CocktailsList">
      <FilterCocktails setFilter={setFilter} filter={filter} />
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

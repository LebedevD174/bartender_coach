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
  // const filterCocktailsByFeature = (cocktails: CocktailFormula[]): number[] => cocktails.filter((cocktail) => cocktail.CocktailFeatures.some((el) => el.feature_id === filter.feature))
 function filterCocktailsByFeature(filter:{category: string | null, feature: string | null}) {
  console.log(cocktails, '++++++++++');
  const res = cocktails.filter((cocktail) => {
    return cocktail.CocktailFeatures.some((el) => el.feature_id === +filter.feature)})

  console.log(res);
  setCocktails(res)
 }
  useEffect(() => {
    setCocktails(cocktailsArr)
    if (filter.feature !== null) {
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

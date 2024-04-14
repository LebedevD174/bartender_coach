import React, { useEffect, useState } from 'react';
import FilterCocktails from './components/FilterCocktails';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { Cocktail, CocktailFormula } from './types/cocktail';
import { loadCocktails } from './cocktailsSlice';

function CocktailsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ category: 0, feature: 0 });
  const cocktailsArr: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const [cocktails, setCocktails] = useState(cocktailsArr);

  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, [dispatch]);


  useEffect(() => {
    setCocktails(cocktailsArr);
    if (+filter.category > 0 || +filter.feature > 0) {
      const res = cocktailsArr.filter(
        (cocktail) =>
          (+filter.category === 0 || cocktail.category_id === +filter.category) &&
          (+filter.feature === 0 ||
            cocktail.CocktailFeatures.some((el) => el.feature_id === +filter.feature)),
      );
      setCocktails(res);
    }
  }, [cocktailsArr, filter]);
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

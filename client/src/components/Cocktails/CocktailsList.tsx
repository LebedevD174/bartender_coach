import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterCocktails from './components/FilterCocktails';
import { useAppSelector } from '../../app/redux/store';
import type { Cocktail } from './types/cocktail';

function CocktailsList(): JSX.Element {
  const [filter, setFilter] = useState({ category: 0, feature: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const cockt: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const cocktailsArr = useMemo(() => cockt.filter((cocktail) => cocktail.status === true), [cockt]);
  const [cocktails, setCocktails] = useState(cocktailsArr);
 
  useEffect(() => {
     setCocktails(cocktailsArr);
     let filteredCocktails = cocktailsArr;
 
     if (filter.category > 0 || filter.feature > 0) {
       filteredCocktails = filteredCocktails.filter(
         (cocktail: Cocktail) =>
           (filter.category === 0 || cocktail.category_id === filter.category) &&
           (filter.feature === 0 ||
             cocktail.CocktailFeatures.some((el) => el.feature_id === filter.feature))
       );
     }
 
     if (searchQuery) {
       filteredCocktails = filteredCocktails.filter((cocktail: Cocktail) =>
         cocktail.title.toLowerCase().includes(searchQuery.toLowerCase())
       );
     }
 
     setCocktails(filteredCocktails);
  }, [cocktailsArr, filter, searchQuery]);
 
  return (
     <div className="CocktailsList">
       <FilterCocktails setFilter={setFilter} filter={filter} onSearch={setSearchQuery} />
       <div className="container">
         {cocktails.map((cocktail) => (
           <Link key={cocktail.id} to={`/cocktails/${cocktail.id}`}>
             <div className="card_cocktail">
               <img src={cocktail.img} alt={cocktail.title} />
               <p className="cocktail_title">{cocktail.title}</p>
             </div>
           </Link>
         ))}
       </div>
     </div>
  );
 }
 
 export default CocktailsList;

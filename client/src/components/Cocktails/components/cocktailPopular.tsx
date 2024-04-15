import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { Cocktail } from '../types/cocktail';
import { loadCocktails } from '../cocktailsSlice';

function CocktailPopular(): JSX.Element {
  const dispatch = useAppDispatch();
  const cocktailPop: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);

  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, []);

  const firstFourCocktails = cocktailPop.slice(0, 4);
  return (
    <div className="popular_cocktail">
      <p>Популярные напитки</p>
      <div className="container">
        {firstFourCocktails.map((cocktail) => (
          <div key={cocktail.id} className="card_cocktail">
            <img src={cocktail.img} alt={cocktail.title} />
            <h3 className='cocktail_title'>{cocktail.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/cocktails">{'все напитки ->'}</Link>
    </div>
  );
}

export default CocktailPopular;

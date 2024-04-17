import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import type { Cocktail } from '../types/cocktail';
import { loadCocktails } from '../cocktailsSlice';

function CocktailPopular(): JSX.Element {
  const dispatch = useAppDispatch();
  const cocktailPop: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const user = useAppSelector((store) => store.auth.user);
  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, []);

  const firstFourCocktails = cocktailPop.slice(0, 4);
  return (
    <div className="popular_cocktail">
      <p className="categoryPopular">Популярные коктейли</p>
      <div className="container">
        {firstFourCocktails.map((cocktail) => (
          <Link key={cocktail.id} to={`/cocktails/${cocktail.id}`}>
            <div key={cocktail.id} className="card_cocktail">
              <img src={cocktail.img} alt={cocktail.title} />
              <h3 className="cocktail_title">{cocktail.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      {user && (
        <Link to="/cocktails">
          <p className="all_cards">все коктейли →</p>
        </Link>
      )}
    </div>
  );
}

export default CocktailPopular;

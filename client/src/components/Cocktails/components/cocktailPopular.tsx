import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/redux/store';

function CocktailPopular(): JSX.Element {
  const cocktailPop = useAppSelector((store) => store.cocktails.cocktails);
  const firstFourCocktails = cocktailPop.slice(0, 4);
  return (
    <div className="popular_cocktail">
      <p>Популярные напитки</p>
      <div className="container">
        {firstFourCocktails.map((cocktail) => (
          <div key={cocktail.id} className="card_cocktail">
            <img src={cocktail.img} alt={cocktail.title} />
            <h3>{cocktail.title}</h3>
          </div>
        ))}
      </div>
      <Link to="/allCocktails">{'все напитки ->'}</Link>
    </div>
  );
}

export default CocktailPopular;

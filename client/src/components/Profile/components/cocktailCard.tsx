import React from 'react';
import type { Cocktail } from '../../Cocktails/types/cocktail';

function CocktailCard({ cocktail }: { cocktail: Cocktail }): JSX.Element {
  return (
    <div className="card_cocktail">
      <img src={cocktail.img} alt={cocktail.title} />
      <p className="cocktail_title">{cocktail.title}</p>
      <button className="btn-delete">Удалить</button>
    </div>
  );
}

export default CocktailCard;

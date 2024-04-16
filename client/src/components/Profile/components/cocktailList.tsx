import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/redux/store';
import type { Cocktail } from '../../Cocktails/types/cocktail';
import CocktailCard from './cocktailCard';
import type { User } from '../../Auth/types/User';

function CocktailsList(): JSX.Element {
  const cocktailsArr: Cocktail[] = useAppSelector((store) => store.cocktails.cocktails);
  const user: User | undefined = useAppSelector((store) => store.auth.user);
  const cocktails = cocktailsArr.filter((cocktail) => cocktail.user_id === user?.id);
  return (
    <div className="CocktailsList">
      <div className="container">
        {cocktails.map((cocktail) => (
          <Link key={cocktail?.id} to={`/cocktails/${cocktail?.id}`}>
            <CocktailCard cocktail={cocktail} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CocktailsList;

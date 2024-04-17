import React from 'react';
import ProfileInfo from './ProfileInfo';
import CocktailsList from './components/cocktailList';
import AddCardCocktail from './components/addCocktail';
import MovingSquares from './MovingSquares';

function ProfilePage(): JSX.Element {
  return (
    <div className="ProfilePage">
      <MovingSquares />
      <ProfileInfo />
      <CocktailsList />
      <AddCardCocktail />
    </div>
  );
}

export default ProfilePage;

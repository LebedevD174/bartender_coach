import React from 'react';
import ProfileInfo from './ProfileInfo';
import CocktailsList from './components/cocktailList';
import AddCardCocktail from './components/addCocktail';

function ProfilePage(): JSX.Element {
    return (
        <div className='ProfilePage'>
            <ProfileInfo/>
            <CocktailsList/>
            <AddCardCocktail/>
        </div>
    );
}

export default ProfilePage;
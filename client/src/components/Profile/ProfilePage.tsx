/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import CocktailsList from './components/cocktailList';
import AddCardCocktail from './components/addCocktail';
import MovingSquares from './MovingSquares';
import Modal from '../ui/Modal';

function ProfilePage(): JSX.Element {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleFormSubmit = (): void => {
    setShowEditForm(false);
  };

  return (
    <div className='ProfilePage'>
      <MovingSquares />
      <ProfileInfo />
      <button className="btn-create-cocktail" onClick={() => setShowEditForm(true)}>
        <p>Добавить новый коктейль</p>
      </button>
      <CocktailsList />
      <Modal isOpen={showEditForm} onClose={() => setShowEditForm(false)}>
        <AddCardCocktail onSubmitSuccess={handleFormSubmit} />
      </Modal>
    </div>
  );
}

export default ProfilePage;
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import type { Cocktail } from '../../Cocktails/types/cocktail';
import { deleteCocktail } from '../../Cocktails/cocktailsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import Modal from '../../ui/Modal';
import CocktailEditForm from './CocktailEditForm';

function CocktailCard({ cocktail }: { cocktail: Cocktail }): JSX.Element {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleFormSubmit = (): void => {
    setShowEditForm(false);
  };
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  useEffect(() => {
    if (deleteId !== null) {
      if (user && user.id) {
        dispatch(deleteCocktail({ id: deleteId, user_id: user.id }));
      } 
    }
 }, [deleteId, user?.id]);
  return (
    <div className="card_cocktail" key={cocktail.id}>
      <img src={cocktail.img} alt={cocktail.title} />
      <p className="cocktail_title">{cocktail.title}</p>
      <button
            className="btn-update-profile"
            type="button"
            onClick={() => setShowEditForm(true)}
          >
            <p>Изменить данные</p>
          </button>
      <button className="btn-delete" onClick={() => setDeleteId(+cocktail.id)}>
        Удалить
      </button>
      {showEditForm && (
        <Modal isOpen={showEditForm} onClose={() => setShowEditForm(false)}>
          <CocktailEditForm onSubmitSuccess={handleFormSubmit} />
        </Modal>
      )}
    </div>
  );
}

export default CocktailCard;

/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import type { Cocktail } from '../../Cocktails/types/cocktail';
import { deleteCocktail } from '../../Cocktails/cocktailsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import Modal from '../../ui/Modal';
import CocktailEditForm from './CocktailEditForm';
import ModalPortal from '../../ui/Portal';

function CocktailCard({ cocktail, onShowEditForm }: { cocktail: Cocktail }): JSX.Element {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  // const [showOverlay, setShowOverlay] = useState(false);

  const handleFormSubmit = (): void => {
    setShowEditForm(false);
    // setShowOverlay(false);
  };
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);
console.log('123');

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
      <div>
        <button
          className="btn-update-cocktails"
          type="button"
          onClick={() => setShowEditForm(true)}
        >
          <p>Изменить</p>
        </button>
        <button className="btn-delete-cocktails" onClick={() => setDeleteId(+cocktail.id)}>
          Удалить
        </button>
      </div>
      {/* {showOverlay && <div className="overlay"></div>} */}
      {showEditForm && (
<ModalPortal>

<Modal isOpen={showEditForm} onClose={() => setShowEditForm(false)}>
          <CocktailEditForm cocktailN={cocktail} onSubmitSuccess={handleFormSubmit} />
        </Modal>
</ModalPortal>
        
       
      )}
    </div>
  );
}

export default React.memo(CocktailCard);

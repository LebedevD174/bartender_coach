/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { deleteCocktailAdmin } from '../Cocktails/cocktailsSlice';

function AdminPage(): JSX.Element {
  const cocktailsAll = useAppSelector((store: RootState) => store.cocktails.cocktails).filter(
    (el) => el.status === false,
  );
  const [cocktails, setCocktails] = useState(cocktailsAll);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCocktails(cocktailsAll.filter((el) => el.status === false));
  }, []);

  useEffect(() => {
    if (deleteId !== null) {
        dispatch(deleteCocktailAdmin({ id: deleteId }));
    }
 }, [deleteId]);
  return (
    <div className='PageModeration'>
      <h2 className="moderationTitle">Коктейли для обработки</h2>
      <div className="container">
        {cocktails?.map((cocktail) => (
          <Link key={cocktail.id} to={`/admin/cocktails/${cocktail.id}`}>
            <div className="card_cocktail">
              <img src={cocktail.img} alt={cocktail.title} />
              <p className="cocktail_title">{cocktail.title}</p>
              <button 
                  className="btn-delete" 
                  onClick={() => setDeleteId(+cocktail.id)}>
                  Удалить
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;

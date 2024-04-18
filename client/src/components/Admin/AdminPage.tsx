/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { deleteCocktailAdmin } from '../Cocktails/cocktailsSlice';

function AdminPage(): JSX.Element {
  const cocktailsAll = useAppSelector((store: RootState) => store.cocktails.cocktails);
  const [cocktails, setCocktails] = useState(cocktailsAll);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setCocktails(cocktailsAll.filter((el) => el.status === false));
  }, []);
  useEffect(() => {
    setCocktails(cocktailsAll.filter((el) => el.status === false));
  }, [cocktailsAll]);
  useEffect(() => {
    if (deleteId !== null) {
      dispatch(deleteCocktailAdmin({ id: deleteId }));
    }
  }, [deleteId]);
  return (
    <div className="PageModeration">
      <h2 className="moderationTitle">Коктейли для обработки</h2>
      <div className="container">
        {cocktails?.map((cocktail) => (
          <div className="card_cocktail">
            <Link key={cocktail.id} to={`/admin/cocktails/${cocktail.id}`}>
              <img src={cocktail.img} alt={cocktail.title} />
              <p className="cocktail_title">{cocktail.title}</p>
            </Link>
            <button className="btn-delete-cocktails" onClick={() => setDeleteId(+cocktail.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;

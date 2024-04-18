import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';

function AdminPage(): JSX.Element {
  const cocktailsAll = useAppSelector((store: RootState) => store.cocktails.cocktails).filter(
    (el) => el.status === false,
  );
  const [cocktails, setCocktails] = useState(cocktailsAll);
  useEffect(() => {
    setCocktails(cocktailsAll.filter((el) => el.status === false));
  }, []);
  return (
    <div className='PageModeration'>
      <h2 className="moderationTitle">Коктейли для обработки</h2>
      <div className="container">
        {cocktails?.map((cocktail) => (
          <Link key={cocktail.id} to={`/admin/cocktails/${cocktail.id}`}>
            <div className="card_cocktail">
              <img src={cocktail.img} alt={cocktail.title} />
              <p className="cocktail_title">{cocktail.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminPage;

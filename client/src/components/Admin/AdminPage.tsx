import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';

function AdminPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const user = useAppSelector((store: RootState) => store.auth.user);
    const cocktailsAll = useAppSelector((store: RootState) => store.cocktails.cocktails)
    const [cocktails, setCocktails] = useState(cocktailsAll);
    useEffect(()=>{
      setCocktails(cocktailsAll.filter((el) => el.status === false));
    }, [])
    useEffect(()=>{
        setCocktails([...cocktailsAll].filter((el) => el.status === false));
    }, [cocktailsAll])
    return (
      <>
        <h2>Коктейли для обработки</h2>
        <div>
            {cocktails?.map((cocktail) => (
         <Link key={cocktail.id} to={`/admin/cocktails/${cocktail.id}`}>
           <div className="card_cocktail">
             <img src={cocktail.img} alt={cocktail.title} />
             <p>{cocktail.title}</p>
           </div>
         </Link>
       ))}
        </div>
        </>
    );
}

export default AdminPage;
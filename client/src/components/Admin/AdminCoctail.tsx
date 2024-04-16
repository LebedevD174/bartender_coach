/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { useAppSelector , useAppDispatch } from '../../../app/redux/store'; 
import type { Cocktail } from "../types/cocktail";
import { loadCocktailsID } from '../cocktailsSlice';
import type { RootState } from '../../app/redux/store';
 
function CocktailCard(): JSX.Element { 
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const cocktail: Cocktail  = useAppSelector((store: RootState) => store.cocktails.cocktail);
    console.log(cocktail, 'card');
    useEffect(() => {
        dispatch(loadCocktailsID(id)).catch(console.log);
      }, []); 
    return ( 
        <>
        <h1>{cocktail.title}</h1> 
        <div>{cocktail.img}</div>
        <h2>Описание</h2>
        <div>{cocktail.description}</div>
        <h2>Рецепт</h2>
        <label htmlFor="lastName">шаг:</label>
      <input
        type="text"
        name='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
        </>
    ); 
} 
 
export default CocktailCard;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/redux/store';
import type { CocktailFormula, Formula } from './types/cocktail';
import { loadCocktailsID } from './cocktailsSlice';

function CoctailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const formula: CocktailFormula | null = useAppSelector((store) => store.cocktails.cocktail);
  console.log(formula);
  
  const navigate = useNavigate();
  useEffect(() => {
    if(id) {
      dispatch(loadCocktailsID(id)).catch(console.log);
    }
  }, []);
  return (
    <>
      <h1>{formula?.title}</h1>
      <div>{formula?.img}</div>
      <h2>Описание</h2>
      <div>{formula?.description}</div>
      <h2>Рецепт</h2>
      {formula?.Formulas.toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0))?.map((el:Formula) => (
        <div key={el.id}>
          {el.Barware && <div>{el.Barware?.title}</div>}
          {el.Drink && (
            <div>
              {el.Drink?.title}: {el.drinks_volume}мл
            </div>
          )}
          {el.Ingredient && (
            <div>
              {el.Ingredient?.title}: {el.ingredient_volume} {el.Ingredient?.measure}
            </div>
          )}
          {el.Tech && <div>{el.Tech?.title}</div>}
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  );
}

export default CoctailPage;

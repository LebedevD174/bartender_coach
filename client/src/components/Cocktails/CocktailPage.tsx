/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/redux/store';
import type { Cocktail, CocktailFormula } from './types/cocktail';
import { loadCocktailsID } from './cocktailsSlice';

function CoctailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const formula: CocktailFormula | null = useAppSelector((store) => store.cocktails.cocktail);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(loadCocktailsID(id)).catch(console.log);
    }
  }, []);
  return (
    <div className="cocktailCardPage">
      <h1>{formula?.title}</h1>
      <img src={formula?.img} alt={formula?.title} />
      <div>
        <h2>Описание</h2>
        <div>{formula?.description}</div>
      </div>
      <div>
        <h2>Рецепт</h2>
        {formula?.Formulas?.toSorted((a, b) => a.order - b.order).map((el) => (
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
      </div>

      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default CoctailPage;

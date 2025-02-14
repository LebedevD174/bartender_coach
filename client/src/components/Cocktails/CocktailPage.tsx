/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { RootState } from '../../app/redux/store';
import { useAppSelector, useAppDispatch } from '../../app/redux/store';
import type { CocktailFormula, Formula } from './types/cocktail';
import { loadCocktailsID } from './cocktailsSlice';

function CoctailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const formula: CocktailFormula | undefined = useAppSelector((store: RootState) => store.cocktails.cocktail);

  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      dispatch(loadCocktailsID(id)).catch(console.log);
    }
  }, []);
  return (
    <div className="pageCard">
      <div className="cocktailCardPage">
        <h1>{formula?.title}</h1>
        <div className="allCardInfo">
          <img className="imgCard" src={formula?.img} alt={formula?.title} />
          <div className="infoCard">
            <h2>Описание</h2>
            <div className="descriptionCard">{formula?.description}</div>
            <h2>Рецепт</h2>
            <div className="recipe gradient1">
              {formula?.Formulas.toSorted((a, b) => (a.order ?? 0) - (b.order ?? 0))?.map(
                (el: Formula) => (
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
                ),
              )}
            </div>
            <button className="btn-back" onClick={() => navigate(-1)}>
              <p>Назад</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoctailPage;

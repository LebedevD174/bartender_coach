/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-return-assign */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/redux/store';
import type { Cocktail, FormulaNew } from '../Cocktails/types/cocktail';
import type { RootState } from '../../app/redux/store';
import FormulaStep from './FormulaStep';
import { loadCocktailsID, updateStatusCocktail } from '../Cocktails/cocktailsSlice';
import { addFormula } from './formulaSlice';

function AdminCocktail(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const cocktail: Cocktail | undefined = useAppSelector(
    (store: RootState) => store.cocktails.cocktail,
  );
  useEffect(() => {
    if (id) {
      dispatch(loadCocktailsID(id)).catch(console.log);
    }
  }, [id]);
  const [count, setCount] = useState<number>(0);
  const [arr, setArr] = useState<string[]>([]);
  const [order, setOrder] = useState<number[]>([]);
  const [formulas, setFormulas] = useState<FormulaNew[]>([]);
  useEffect(() => {
    if (count > 0) {
      setOrder([...order, count]);
      setArr(Array(count).fill(''));
    }
  }, [count]);

  function addForm(): void {
    dispatch(addFormula(formulas)).then(() => {
      if (id) {
        dispatch(updateStatusCocktail(+id));
      }
    });
  }
  return (
    <div className="PageModeration">
      <h1 className="moderationTitle">{cocktail?.title}</h1>
      <div className="infoModeration">
        <div className="image-container">
          <img src={cocktail?.img} alt={cocktail?.title} />
        </div>
        <div className="infoMod">
          <div className="descriptionModeration">
            <h2>Описание</h2>
            <p>{cocktail?.description}</p>
          </div>
          <h2 className="createRec">Создание рецепта</h2>
          <button className="btn-create-select" onClick={() => setCount((prev) => (prev += 1))}>
            Добавить шаг рецепта
          </button>
          <div className="container__formula">
            {count !== 0 &&
              arr.map((el, index) => (
                <>
                  <FormulaStep
                    key={order[index]}
                    cocktail={cocktail}
                    order={order[index]}
                    formulas={formulas}
                    setFormulas={setFormulas}
                  />
                  <div>{el}</div>
                </>
              ))}
            <button className="btn-send" onClick={addForm}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCocktail;

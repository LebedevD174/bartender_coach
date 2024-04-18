/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Drink, DrinkParams } from './types/drink';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { loadDrinks } from './drinksSlice';

function DrinkPage(): JSX.Element {
  const { drinkId } = useParams<DrinkParams>();
  const dispatch = useAppDispatch();
  const drinks: Drink[] = useAppSelector((store) => store.drinks.drinks);
  const navigate = useNavigate();
  const [drink, setDrink] = useState<Drink | null>(null);

  useEffect(() => {
    dispatch(loadDrinks()).catch(console.error);
  }, []);

  useEffect(() => {
    if (drinks) {
      const id = Number(drinkId);
      const foundDrink = drinks.find((drink) => drink.id === id);
      setDrink(foundDrink || null);
    }
  }, [drinks]);

  return (
    <div className="pageCard" key={drink?.id}>
      <div className="cocktailCardPage">
        <h1>{drink?.title}</h1>
        <div className="allCardInfo">
          <img src={drink?.img} alt={drink?.title} />
          <div className="infoCard">
            <p className='descriptionCard'>{drink?.description}</p>
            <button className="btn-back" onClick={() => navigate(-1)}>
              <p>Назад</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkPage;

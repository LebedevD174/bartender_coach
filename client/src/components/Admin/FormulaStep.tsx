import React, { FormEventHandler, useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../app/redux/store';
import Barware from '../Coach/Barware';
import type { Cocktail } from '../Cocktails/types/cocktail';
import { loadBarware } from '../Barware/barwareSlice';

function FormulaStep({cocktail}: {cocktail: Cocktail}): JSX.Element {
    const dispatch = useAppDispatch();
    const 
    const [select, setSelect] = useState<string>('')
    const [input, setInput] = useState({cocktail_id: cocktail.id, barware_id: 0, drink_id: 0, drinks_volume: 0, tech_id: 0, ingredient_id: 0, ingredients_volume: 0})
    const barware = useAppSelector((store: RootState) => store.barware.barware);
    const drinks = useAppSelector((store: RootState) => store.drinks.drinks);
    useEffect(()=>{
        dispatch(loadBarware()).catch(console.log)
        dispatch(load()).catch(console.log)
    }, [])
    return (
        <div>
        <select name="option" id="option" onChange={(e) => setSelect(e.target.value)}>
            <option hidden>Шаг рецепта</option>
            <option value='barware_id'>Барные принадлежности</option>
            <option value='drink_id'>Напитки</option>
            <option value='tech_id'>Техники</option>
            <option value='ingredient_id'>Ингредиенты</option>
        </select>
        {select === 'barware_id' && 
        <label htmlFor="barware_id">Выюерите барные принадлежности</label>
        <select name="barware_id" id="barware_id" onChange={(e) => setInput((prev) => ({...prev, barware_id: +e.target.value}))}>
            <option hidden>Барные принадлежности</option>
            {barware.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        }
        {select === 'drink_id' && 
        <label htmlFor="drink_id">Выберите напиток</label>
        <select name="drink_id" id="drink_id" onChange={() => setInput((prev) => ({...prev, drink_id}))}>
            <option hidden>Напитки</option>
            {drinks.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        <input type="number" value={input.drinks_volume} onChange={() => setInput((prev) => ({...prev, drinks_volume}))}/>
        }
        {select === 'tech_id' && 
        <label htmlFor="tech_id">Выберите технику</label>
        <select name="tech_id" id="tech_id" onChange={() => setInput((prev) => ({...prev, tech_id}))}>
            <option hidden>Техники</option>
            {techs.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        }
        {select === 'ingredient_id' && 
        <label htmlFor="ingredient_id">Напитки</label>
        <select name="ingredient_id" id="ingredient_id" onChange={() => setInput((prev) => ({...prev, ingredient_id}))}>
            <option hidden>Напитки</option>
            {ingredients.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        <input type="number" value={input.ingredients_volume} onChange={() => setInput((prev) => ({...prev, ingredients_volume}))}/>
        <div>{}</div>
        }
        </div>
    );
}

export default FormulaStep;
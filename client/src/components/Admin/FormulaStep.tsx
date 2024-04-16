import React, { FormEventHandler, useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../app/redux/store';
import Barware from '../Coach/Barware';
import type { Cocktail } from '../Cocktails/types/cocktail';
import { loadBarware } from '../Barware/barwareSlice';
import { loadIngredient } from '../Ingredient/ingredientSlice';
import { loadTech } from '../Tech/techSlice';
import { loadDrinks } from '../Drinks/drinksSlice';

function FormulaStep(): JSX.Element {
    const dispatch = useAppDispatch();
    const [select, setSelect] = useState<string>('')
    const [input, setInput] = useState({barware_id: 0, drink_id: 0, drinks_volume: 0, tech_id: 0, ingredient_id: 0, ingredients_volume: 0})
    const barware = useAppSelector((store: RootState) => store.barware.barware);
    const drinks = useAppSelector((store: RootState) => store.drinks.drinks);
    const ingredients = useAppSelector((store: RootState) => store.ingredients.ingredients);
    const techs = useAppSelector((store: RootState) => store.techs.techs);
    useEffect(()=>{
        dispatch(loadBarware()).catch(console.log)
        dispatch(loadIngredient()).catch(console.log)
        dispatch(loadTech()).catch(console.log)
        dispatch(loadDrinks()).catch(console.log)
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
        <>
        <label htmlFor="barware_id">Выберите барные принадлежности</label>
        <select name="barware_id" id="barware_id" onChange={(e) => setInput((prev) => ({...prev, barware_id: +e.target.value}))}>
            <option hidden>Барные принадлежности</option>
            {barware.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        </>
        }
        {select === 'drink_id' && 
        <>
        <label htmlFor="drink_id">Выберите напиток</label>
        <select name="drink_id" id="drink_id" onChange={(e) => setInput((prev) => ({...prev, drink_id: +e.target.value}))}>
            <option hidden>Напитки</option>
            {drinks.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        <input type="number" value={input.drinks_volume} onChange={(e) => setInput((prev) => ({...prev, drinks_volume: +e.target.value}))}/>
        </>
        }
        {select === 'tech_id' && 
        <>
        <label htmlFor="tech_id">Выберите технику</label>
        <select name="tech_id" id="tech_id" onChange={(e) => setInput((prev) => ({...prev, tech_id: +e.target.value}))}>
            <option hidden>Техники</option>
            {techs.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        </>
        }
        {select === 'ingredient_id' && 
        <>
        <label htmlFor="ingredient_id">Напитки</label>
        <select name="ingredient_id" id="ingredient_id" onChange={(e) => setInput((prev) => ({...prev, ingredient_id: +e.target.value}))}>
            <option hidden>Напитки</option>
            {ingredients.map((el) => {
                return <option key={el.id} value={el.id}>{el.title}</option>
            })}
        </select>
        <input type="number" value={input.ingredients_volume} onChange={(e) => setInput((prev) => ({...prev, ingredients_volume: +e.target.value}))}/>
        </>
        }
        <button>++++++++++</button>
        </div>
    );
}

export default FormulaStep;
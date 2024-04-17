import type { Dispatch, SetStateAction} from 'react';
import React, { FormEventHandler, useEffect, useState } from 'react';
import type { RootState} from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import Barware from '../Coach/Barware';
import type { Cocktail, FormulaNew } from '../Cocktails/types/cocktail';
import { loadBarware } from '../Barware/barwareSlice';
import { loadIngredient } from '../Ingredient/ingredientSlice';
import { loadTech } from '../Tech/techSlice';
import { loadDrinks } from '../Drinks/drinksSlice';

function FormulaStep({cocktail, order, formulas, setFormulas} : {cocktail: Cocktail | null, order: number, formulas: FormulaNew[], setFormulas: Dispatch<SetStateAction<FormulaNew[]>>}): JSX.Element {
    const dispatch = useAppDispatch();
    const [select, setSelect] = useState<string>('')
    const [input, setInput] = useState<FormulaNew>({cocktail_id: cocktail?.id, barware_id: null, drink_id: null, drinks_volume: 0, tech_id: null, ingredient_id: null, ingredients_volume: 0, order})
    const [isFormDisabled, setDisable] = useState<boolean>(false)
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
    function fixChange(): void {
        setFormulas([...formulas, input])
        setDisable(true)
    }
    return (
        <div>
        <select name="option" id="option" onChange={(e) => setSelect(e.target.value)} disabled={isFormDisabled}>
            <option hidden>Шаг рецепта</option>
            <option value='barware_id'>Барные принадлежности</option>
            <option value='drink_id'>Напитки</option>
            <option value='tech_id'>Техники</option>
            <option value='ingredient_id'>Ингредиенты</option>
        </select>
        {select === 'barware_id' && 
        <>
        <label htmlFor="barware_id">Выберите барные принадлежности</label>
        <select name="barware_id" id="barware_id" onChange={(e) => setInput((prev) => ({...prev, barware_id: +e.target.value}))} disabled={isFormDisabled}>
            <option hidden>Барные принадлежности</option>
            {barware.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>
        </>
        }
        {select === 'drink_id' && 
        <>
        <label htmlFor="drink_id">Выберите напиток</label>
        <select name="drink_id" id="drink_id" onChange={(e) => setInput((prev) => ({...prev, drink_id: +e.target.value}))} disabled={isFormDisabled}>
            <option hidden>Напитки</option>
            {drinks.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>
        <label htmlFor="drinks_volume" />
        <input type="number" id='drinks_volume' value={input.drinks_volume} onChange={(e) => setInput((prev) => ({...prev, drinks_volume: +e.target.value}))} disabled={isFormDisabled}/>
        </>
        }
        {select === 'tech_id' && 
        <>
        <label htmlFor="tech_id">Выберите технику</label>
        <select name="tech_id" id="tech_id" onChange={(e) => setInput((prev) => ({...prev, tech_id: +e.target.value}))} disabled={isFormDisabled}>
            <option hidden>Техники</option>
            {techs.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>
        </>
        }
        {select === 'ingredient_id' && 
        <>
        <label htmlFor="ingredient_id">Выберите ингредиент</label>
        <select name="ingredient_id" id="ingredient_id" onChange={(e) => setInput((prev) => ({...prev, ingredient_id: +e.target.value}))} disabled={isFormDisabled}>
            <option hidden>Ингредиенты</option>
            {ingredients.map((el) => <option key={el.id} value={el.id}>{el.title}</option>)}
        </select>
        <label htmlFor="ingredients_volume" />
        <input type="number" id='ingredients_volume' value={input.ingredients_volume} onChange={(e) => setInput((prev) => ({...prev, ingredients_volume: +e.target.value}))} disabled={isFormDisabled}/>
        <span>{ingredients.find((el)=>el.id === input.ingredient_id)?.measure}</span>
        </>
        }
        <button onClick={fixChange}>Зафиксировать</button>
        </div>
    );
}

export default FormulaStep;
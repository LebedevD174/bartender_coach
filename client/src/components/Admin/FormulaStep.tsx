import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../app/redux/store';
import Barware from '../Coach/Barware';

function FormulaStep() {
    const dispatch = useAppDispatch();
    const 
    const [select, setSelect] = useState('')
    const [input, setInput] = useState({})
    const barware = useAppSelector((store: RootState) => store.admin.barware);
    const drinks = useAppSelector((store: RootState) => store.drinks.drinks);
    useEffect(()=>{
        dispatch(loadBarware()).catch(console.log)
        dispatch(loadIngredient()).catch(console.log)
    }, [])
    return (
        <>
        <select name="" id="">
            <option value='barware_id'>Барные принадлежности</option>
            <option value='drink_id'>Напитки</option>
            <option value='tech_id'>Ингредиенты</option>
            <option value='ingredient_id'>Ингредиенты</option>
        </select>
        {select === 'barware_id' && 
        <label htmlFor="barware_id">{}</label>
        <select name="" id="">
            <option value={barware.id}></option>
        </select>
        }
        </>
    );
}

export default FormulaStep;
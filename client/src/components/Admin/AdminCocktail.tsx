/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { useAppSelector , useAppDispatch } from '../../app/redux/store'
import type { Cocktail, Formula, FormulaNew } from "../Cocktails/types/cocktail";
import type { RootState } from '../../app/redux/store';
import FormulaStep from './FormulaStep';
import { loadCocktailsID } from '../Cocktails/cocktailsSlice';
 
function AdminCocktail(): JSX.Element { 
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const cocktail: Cocktail  = useAppSelector((store: RootState) => store.cocktails.cocktail);
    useEffect(() => {
        dispatch(loadCocktailsID(id)).catch(console.log);
      }, []); 
      const [count, setCount] = useState<number>(0)
      const [arr, setArr] = useState<Formula[] | number[]>([])
      const [order, setOrder] = useState<number[]>([])
      const [formulas, setFormulas] = useState<FormulaNew[]>([])
      useEffect(() => {
          if (count > 0) {
            setOrder([...order, count])
            setArr(Array(count).fill(''))
          }
      }, [count])
      function addFormulas() {
        dispatch(addFormulas())
      }
    return ( 
        <>
        <h1>{cocktail.title}</h1> 
        <div>{cocktail.img}</div>
        <h2>Описание</h2>
        <div>{cocktail.description}</div>
        <h2>Создание рецепта</h2>
        <button onClick={()=>setCount((prev) => prev += 1)}>Добавить шаг рецепта</button>
        <div className='container__formula'>
        {count !== 0 && arr.map((el, index) => {
            return <FormulaStep key={order[index]} cocktail={cocktail} order={order[index]} formulas={formulas} setFormulas={setFormulas}/>
        })}
        <button onClick={()=>{}}>Отправить</button>
        </div>
        </>
    ); 
} 
 
export default AdminCocktail;
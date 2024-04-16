/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { useAppSelector , useAppDispatch } from '../../app/redux/store'
import type { Cocktail, Formula, FormulaNew } from "../Cocktails/types/cocktail";
import type { RootState } from '../../app/redux/store';
import FormulaStep from './FormulaStep';
import { loadCocktailsID, updateStatusCocktail } from '../Cocktails/cocktailsSlice';
import { addFormula } from './formulaSlice';
import { User } from '../Auth/types/User';
 
function AdminCocktail(): JSX.Element { 
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const cocktail: Cocktail  = useAppSelector((store: RootState) => store.cocktails.cocktail);
    const user: User | undefined  = useAppSelector((store: RootState) => store.auth.user);
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
      useEffect(()=>{
        console.log(formulas);
      }, [formulas])

      function addForm() {
        dispatch(addFormula(formulas)).then((data) => {
          if (data.payload.message === 'success') {
            const {id} = cocktail;
            const user_id = user?.id
            dispatch(updateStatusCocktail({id, user_id}))
          }
        })
      };
    return ( 
        <>
        <h1>{cocktail.title}</h1> 
        <div>{cocktail.img}</div>
        <h2>Описание</h2>
        <div>{cocktail.description}</div>
        <h2>Создание рецепта</h2>
        <button onClick={()=>setCount((prev) => prev += 1)}>Добавить шаг рецепта</button>
        <div className='container__formula'>
        {count !== 0 && arr.map((el, index) => <FormulaStep key={order[index]} cocktail={cocktail} order={order[index]} formulas={formulas} setFormulas={setFormulas}/>)}
        <button onClick={addForm}>Отправить</button>
        </div>
        </>
    ); 
} 
 
export default AdminCocktail;
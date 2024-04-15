import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from 'react-beautiful-dnd';
import {shallowEqual as equal} from 'shallow-equal'; // Assuming you install shallow-equal
import type { RootState } from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import type { CocktailFormula, Formula } from '../Cocktails/types/cocktail';
import { Cocktail } from '../Cocktails/types/cocktail';

function CoachWindow({ cocktail, setCocktail }: { cocktail: CocktailFormula | null, setCocktail: (el: CocktailFormula | null) => void }): JSX.Element {
  const user = useAppSelector((store: RootState) => store.auth.user);
  const profile = useAppSelector((store: RootState) => store.profile.profile);
//   const [formulas, setFormulas] = useState(cocktail.Formulas.toSorted((a: Formula, b: Formula) => a.order - b.order));
  const [formulas, setFormulas] = useState<Formula[]>(cocktail.Formulas.toSorted((a: Formula, b: Formula) => Math.random() - 0.5));
  const [newFormulas, setNewFormulas] = useState<Formula[]>([]);
  const initialFormulas = useRef<Formula[]>(cocktail.Formulas.toSorted((a: Formula, b: Formula) => a.order - b.order));
  const [check, setCheck] = useState<CheckState>({});
  const [result, setResult] = useState(false);
  const [win, setWin] = useState<boolean | null>(null);

  type CheckState = { [key: number]: boolean | null };
  useEffect(()=>{
    initialFormulas.current.forEach((formula, index) => {
        if (newFormulas[index]){
            if (formula.order === newFormulas[index].order){
                const updatedCheck: CheckState = { ...check }; 
                updatedCheck[index] = true;
                setCheck(updatedCheck);
            } else {
                const updatedCheck: CheckState = { ...check }; 
                updatedCheck[index] = false;
                setCheck(updatedCheck);
            }
        }
    })
    if (equal(newFormulas, initialFormulas.current)) {
        setResult(true)
    } else {
        setResult(false)
    }
  },[newFormulas])

  useEffect(()=>{
    console.log(check);
    
    if (Object.values(check).some(el => el === false)) {
        setResult(true);
        setWin(false)
    }
    if (Object.values(check).every(el => el === true)) {
        setResult(true);
        setWin(true)
    }
    console.log(result, win, Object.values(check));
    
  }, [check])
  useEffect(()=>{
    setFormulas(cocktail.Formulas.toSorted((a: Formula, b: Formula) => Math.random() - 0.5))
    setNewFormulas([])
    setCheck({...Array(formulas.length).fill(null)})
    setWin(null)
    setResult(false)
  }, [cocktail])

const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return;
   
    const items: Formula[] = Array.from(formulas);
    const newItems: Formula[] = Array.from(newFormulas);
   
    if (result.source.droppableId === "droppable" && result.destination.droppableId === "newDroppable") {
       const [reorderedItem] = items.splice(result.source.index, 1);
       newItems.push(reorderedItem);
       setFormulas(items);
       setNewFormulas(newItems);
    } else if (result.source.droppableId === "newDroppable" && result.destination.droppableId === "droppable") {
       const [reorderedItem] = newItems.splice(result.source.index, 1);
       items.push(reorderedItem);
       setNewFormulas(newItems);
       setFormulas(items);
    }
   };

  function closeCoach(): void {
    setCocktail(null)
  }
  function restartCoach(): void {
    setFormulas(cocktail.Formulas.toSorted((a: Formula, b: Formula) => Math.random() - 0.5))
    setNewFormulas([])
    setCheck({...Array(formulas.length).fill(null)})
    setWin(null)
    setResult(false)
  }

  return (
    <>
      <div>
        {profile?.name}
      </div>
      <div>
        {user?.login}
      </div>
      <div>{cocktail?.title}</div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {formulas.map((formula: Formula, index: number) => (
                <Draggable key={formula.id} draggableId={`draggable-${formula.id}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {formula.order && <div>{formula.order}</div>}
                      {formula.Barware && <div>{formula.Barware?.title}</div>}
                      {formula.Drink && <div>{formula.Drink?.title}: {formula.drinks_volume}мл</div>}
                      {formula.Ingredient && (
                        <div>{formula.Ingredient?.title}: {formula.ingredient_volume} {formula.Ingredient?.measure}</div>
                      )}
                      {formula.Tech && <div>{formula.Tech?.title}</div>}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="newDroppable">
 {(provided) => (
    <div {...provided.droppableProps} ref={provided.innerRef} style={{ backgroundColor: 'lightgrey', padding: '10px', borderRadius: '5px' }}>
      <h3>Коктейль</h3>
      {newFormulas.map((formula: Formula, index: number) => (
        <Draggable key={formula.id} draggableId={`draggable-${formula.id}`} index={index}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{color:'black', margin: '5px 0', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}>
              {/* Отображение информации о формуле */}
              {formula.order && <div>{formula.order}</div>}
              {formula.Barware && <div>{formula.Barware?.title}</div>}
              {formula.Drink && <div>{formula.Drink?.title}: {formula.drinks_volume}мл</div>}
              {formula.Ingredient && (
                <div>{formula.Ingredient?.title}: {formula.ingredient_volume} {formula.Ingredient?.measure}</div>
              )}
              {formula.Tech && <div>{formula.Tech?.title}</div>}
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
 )}
</Droppable>
      </DragDropContext>

      <div>
        {result === true && <button onClick={closeCoach}>Завершить</button>}
        {win === true && <div>Успех!</div>}
        {win === false && <><div>Вы проиграли</div><button onClick={restartCoach}>Начать заново</button></>}
      </div>
    </>
  );
}

export default CoachWindow;

import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable, type DropResult } from 'react-beautiful-dnd';
import type { RootState } from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import type { CocktailFormula, Formula } from '../Cocktails/types/cocktail';
import { Cocktail } from '../Cocktails/types/cocktail';
import {shallowEqual as equal} from 'shallow-equal'; // Assuming you install shallow-equal

function CoachWindow({ cocktail, setCocktail }: { cocktail: CocktailFormula | null, setCocktail: (el: CocktailFormula | null) => void }): JSX.Element {
  const user = useAppSelector((store: RootState) => store.auth.user);
  const profile = useAppSelector((store: RootState) => store.profile.profile);
//   const [formulas, setFormulas] = useState(cocktail.Formulas.toSorted((a: Formula, b: Formula) => a.order - b.order));
  const [formulas, setFormulas] = useState(cocktail.Formulas.toSorted((a: Formula, b: Formula) => Math.random() - 0.5));
  const initialFormulas = useRef(cocktail.Formulas.toSorted((a: Formula, b: Formula) => a.order - b.order));
  const [result, setResult] = useState(false);

  useEffect(()=>{
    if (equal(formulas, initialFormulas.current)) {
        setResult(true)
    } else {
        setResult(false)
    }
  })
  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return;
    const items:Formula[] = Array.from(formulas);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
        setFormulas(items);
  };

  function closeCoach(): void {
    setCocktail(null)
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
      </DragDropContext>

      <div>
        {result === true && <button onClick={closeCoach}>Завершить</button>}
      </div>
    </>
  );
}

export default CoachWindow;

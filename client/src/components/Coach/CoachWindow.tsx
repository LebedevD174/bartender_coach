/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
  DroppableProvided,
  DraggableProvided,
} from 'react-beautiful-dnd';
import { shallowEqual as equal } from 'shallow-equal';
import type { CocktailFormula, Formula } from '../Cocktails/types/cocktail';

function CoachWindow({
  cocktail,
  setCocktail,
}: {
  cocktail: CocktailFormula | null;
  setCocktail: Dispatch<SetStateAction<CocktailFormula | null>>;
}): JSX.Element {
  const [formulas, setFormulas] = useState<Formula[]>(
    cocktail ? cocktail.Formulas.toSorted(() => Math.random() - 0.5) : [],
  );
  const [newFormulas, setNewFormulas] = useState<Formula[]>([]);
  const initialFormulas = useRef<Formula[]>(
    cocktail?.Formulas.toSorted((a: Formula, b: Formula) => (a.order || 0) - (b.order || 0)) || [],
  );
  const [check, setCheck] = useState<CheckState>({});
  const [result, setResult] = useState(false);
  const [win, setWin] = useState<boolean | null>(null);

  type CheckState = { [key: number]: boolean | null };
  useEffect(() => {
    initialFormulas.current.forEach((formula, index) => {
      if (newFormulas[index]) {
        if (formula.order === newFormulas[index].order) {
          const updatedCheck: CheckState = { ...check };
          updatedCheck[index] = true;
          setCheck(updatedCheck);
        } else {
          const updatedCheck: CheckState = { ...check };
          updatedCheck[index] = false;
          setCheck(updatedCheck);
        }
      }
    });
    if (equal(newFormulas, initialFormulas.current)) {
      setResult(true);
    } else {
      setResult(false);
    }
  }, [newFormulas]);

  useEffect(() => {
    if (Object.values(check).some((el) => el === false)) {
      setResult(true);
      setWin(false);
    }
    if (Object.values(check).every((el) => el === true)) {
      setResult(true);
      setWin(true);
    }
  }, [check]);
  useEffect(() => {
    if (cocktail) {
      setFormulas(cocktail.Formulas.toSorted(() => Math.random() - 0.5));
      setNewFormulas([]);
      setCheck({ ...Array(formulas.length).fill(null) });
      setWin(null);
      setResult(false);
    }
  }, [cocktail]);

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) return;
    const items: Formula[] = Array.from(formulas);
    const newItems: Formula[] = Array.from(newFormulas);

    if (
      result.source.droppableId === 'droppable' &&
      result.destination.droppableId === 'newDroppable'
    ) {
      const [reorderedItem] = items.splice(result.source.index, 1);
      newItems.push(reorderedItem);
      setFormulas(items);
      setNewFormulas(newItems);
    } else if (
      result.source.droppableId === 'newDroppable' &&
      result.destination.droppableId === 'droppable'
    ) {
      const [reorderedItem] = newItems.splice(result.source.index, 1);
      items.push(reorderedItem);
      setNewFormulas(newItems);
      setFormulas(items);
    }
  };

  function closeCoach(): void {
    setCocktail(null);
  }
  function restartCoach(): void {
    if (cocktail) {
      setFormulas(cocktail.Formulas.toSorted(() => Math.random() - 0.5));
      setNewFormulas([]);
      setCheck({ ...Array(formulas.length).fill(null) });
      setWin(null);
      setResult(false);
    }
  }

  return (
    <div className="CoachPage">
      <div className="titleCocktailBtn">{cocktail?.title}</div>
      {result !== true && (
        <div className="allContainerFormula">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided: DroppableProvided) => (
                <div
                  className="containerCardFormula"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {formulas.map((formula: Formula, index: number) => (
                    <Draggable
                      key={formula.id}
                      draggableId={`draggable-${formula.id}`}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <div
                          className="cardFormula"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {/* {formula.order && <div>{formula.order}</div>} */}
                          {formula.Barware && (
                            <div>
                              <img src={formula.Barware?.img} alt="" />
                            </div>
                          )}
                          {formula.Barware && <p>{formula.Barware?.title}</p>}
                          {formula.Drink && (
                            <div>
                              <img src={formula.Drink?.img} alt="" />
                            </div>
                          )}
                          {formula.Drink && (
                            <p>
                              {formula.Drink?.title}: {formula.drinks_volume}мл
                            </p>
                          )}
                          {formula.Ingredient && (
                            <div>
                              <img src={formula.Ingredient?.img} alt="" />
                            </div>
                          )}
                          {formula.Ingredient && (
                            <p>
                              {formula.Ingredient?.title}: {formula.ingredient_volume}{' '}
                              {formula.Ingredient?.measure}
                            </p>
                          )}
                          {formula.Tech && <p>{formula.Tech?.title}</p>}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="newContainerCardFormula">
              <h3>Коктейль</h3>
              <Droppable droppableId="newDroppable">
                {(provided: DroppableProvided) => (
                  <div
                    className="cardsformulanew"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {newFormulas.map((formula: Formula, index: number) => (
                      <Draggable
                        key={formula.id}
                        draggableId={`draggable-${formula.id}`}
                        index={index}
                      >
                        {(provided: DraggableProvided) => (
                          <div
                            className="cardFormulaNew"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* Отображение информации о формуле */}
                            {/* {formula.order && <div>{formula.order}</div>} */}
                            {formula.Barware && (
                              <div>
                                <img src={formula.Barware?.img} alt="" />
                              </div>
                            )}
                            {formula.Barware && <p>{formula.Barware?.title}</p>}
                            {formula.Drink && (
                              <div>
                                <img src={formula.Drink?.img} alt="" />
                              </div>
                            )}
                            {formula.Drink && (
                              <p>
                                {formula.Drink?.title}: {formula.drinks_volume}мл
                              </p>
                            )}
                            {formula.Ingredient && (
                              <div>
                                <img src={formula.Ingredient?.img} alt="" />
                              </div>
                            )}
                            {formula.Ingredient && (
                              <div>
                                {formula.Ingredient?.title}: {formula.ingredient_volume}{' '}
                                {formula.Ingredient?.measure}
                              </div>
                            )}
                            {formula.Tech && <p>{formula.Tech?.title}</p>}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
      )}
      <div className="chert">
        {win === true && <div className="cool">Успех!</div>}
        <div className="backchert">
          {win === false && (
            <>
              <div className="lost">Вы проиграли</div>
              <button className="btnRestart" onClick={restartCoach}>
                Начать заново
              </button>
            </>
          )}
          {result === true && (
            <button className="btnClose" onClick={closeCoach}>
              Завершить
            </button>
          )}
        </div>
      </div>
      <button className="btn-back" onClick={closeCoach}>
        <p>Назад</p>
      </button>
    </div>
  );
}

export default CoachWindow;

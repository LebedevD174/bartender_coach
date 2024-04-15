// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import type { RootState} from '../../app/redux/store';
// import { useAppSelector } from '../../app/redux/store';
// import { Cocktail, CocktailFormula } from '../Cocktails/types/cocktail';

// function CoachWindow({cocktail, setCocktail}): JSX.Element {
//     const user = useAppSelector((store: RootState) => store.auth.user);
//     const profile = useAppSelector((store: RootState) => store.profile.profile);
//     console.log(cocktail.title);
//     console.log(cocktail.Formulas.toSorted((a,b) => a.order - b.order));
//     console.log(cocktail.Formulas[0].Barware);
    
//     const onDragEnd = (result) => {
//         if (!result.destination) return;
//         const items = Array.from(cocktail.Formulas);
//         const [reorderedItem] = items.splice(result.source.index, 1);
//         items.splice(result.destination.index, 0, reorderedItem);

//         setCocktail({ ...cocktail, Formulas: items });
//     };
    
//     return (
//         <>
//         <div>
//             {profile?.name}
//         </div>
//         <div>
//             {user?.login}
//         </div>
//         <div>{cocktail.title}</div>

//         <DragDropContext onDragEnd={onDragEnd}>
//                 <Droppable droppableId="droppable">
//                     {(provided) => (
//                         <div {...provided.droppableProps} ref={provided.innerRef}>
//                             {cocktail.Formulas.toSorted((a, b) => a.order - b.order).map((formula, index) => (
//                                 <Draggable key={formula.id} draggableId={`draggable-${index}`} index={index}>
//                                     {(provided) => (
//                                         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                             {formula.order && <div>{formula.order}</div>}
//                                             {formula.Barware && <div>{formula.Barware?.title}</div>}
//                                             {formula.Drink && <div>{formula.Drink?.title}: {formula.drinks_volume}мл</div>}
//                                             {formula.Ingredient && <div>{formula.Ingredient?.title}: {formula.ingredient_volume} {formula.Ingredient?.measure}</div>}
//                                             {formula.Tech && <div>{formula.Tech?.title}</div>}
//                                         </div>
//                                     )}
//                                 </Draggable>
//                             ))}
//                             {provided.placeholder}
//                         </div>
//                     )}
//                 </Droppable>
//             </DragDropContext>
//         </>
//     );
// }

// export default CoachWindow;
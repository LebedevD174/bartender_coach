import React from 'react';
import type { RootState} from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import { Cocktail, CocktailFormula } from '../Cocktails/types/cocktail';

function CoachWindow(): JSX.Element {
    const user = useAppSelector((store: RootState) => store.auth.user);
    const profile = useAppSelector((store: RootState) => store.profile.profile);
    const cocktails: Cocktail[] = useAppSelector((store: RootState) => store.cocktails.cocktails);
    return (
        <>
        <div>
            {profile?.name}
        </div>
        <div>
            {user?.login}
        </div>
        {cocktails?.map((cocktail) => {
            cocktail.Formula.map((formula) => {
                return <div>
                    <div>{formula.cocktail_id}</div>
                    <div>{formula.drink_id}</div>
                    <div>{formula.ingridient_id}</div>
                </div>
            })    
            
        })}
        </>
    );
}

export default CoachWindow;
import React, { useState } from 'react';
import { RootState, useAppSelector } from '../../app/redux/store';
import CoachWindow from './CoachWindow';
import { Cocktail, CocktailFormula } from '../Cocktails/types/cocktail';

function CoachPage(): JSX.Element {
    const user = useAppSelector((store: RootState) => store.auth.user);
    const profile = useAppSelector((store: RootState) => store.profile.profile);
    const cocktails: Cocktail[] = useAppSelector((store: RootState) => store.cocktails.cocktails);
    const [cocktail, setCocktail] = useState(null)
    return (
        <div>
            {cocktail !== null ? <CoachWindow cocktail={cocktail} setCocktail={setCocktail}/> : <div>Выберите коктейль</div>}
            <div>
                {cocktails.map((cocktail) => <button key={cocktail.id} onClick={() => setCocktail(cocktail)}>{cocktail.title}</button>)}
            </div>
        </div>
    );
}

export default CoachPage;
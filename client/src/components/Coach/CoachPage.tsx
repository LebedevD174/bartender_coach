import React, { useState } from 'react';
import type { RootState} from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import CoachWindow from './CoachWindow';
import type { Cocktail} from '../Cocktails/types/cocktail';
import { CocktailFormula } from '../Cocktails/types/cocktail';

function CoachPage(): JSX.Element {
    const user = useAppSelector((store: RootState) => store.auth.user);
    const profile = useAppSelector((store: RootState) => store.profile.profile);
    const cocktails: Cocktail[] = useAppSelector((store: RootState) => store.cocktails.cocktails);
    const [cocktail, setCocktail] = useState(null)
    return (
        <div className='CoachPage'>
            {cocktail !== null ? <CoachWindow cocktail={cocktail} setCocktail={setCocktail}/> : <div className='titlePage'>Выберите коктейль</div>}
            <div>
                {cocktails.map((cocktail) => <button className='btnCocktailCoach' key={cocktail.id} onClick={() => setCocktail(cocktail)}>{cocktail.title}</button>)}
            </div>
        </div>
    );
}

export default CoachPage;
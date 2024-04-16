import React from 'react';
import type { RootState} from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';

function Barware() {
    const cocktail = useAppSelector((store: RootState) => store.cocktails.cocktails)
    const drinks = cocktail.map((cocktail) => cocktail.Formula)
    const user = useAppSelector((store: RootState) => store.auth.user)
    return (
        <div>
            {}
        </div>
    );
}

export default Barware;
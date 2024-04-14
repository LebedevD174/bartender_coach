import React from 'react';
import { RootState, useAppSelector } from '../../app/redux/store';

function CoachPage() {
    const user = useAppSelector((store: RootState) => store.auth.user);
    return (
        <div>
            
        </div>
    );
}

export default CoachPage;
import React from 'react';
import { RootState, useAppSelector } from '../../app/redux/store';
import CoachWindow from './CoachWindow';

function CoachPage() {
    const user = useAppSelector((store: RootState) => store.auth.user);
    return (
        <div>
            <CoachWindow/>
        </div>
    );
}

export default CoachPage;
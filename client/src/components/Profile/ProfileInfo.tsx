import React, { useEffect, useState } from 'react';
import type { User } from '../Auth/types/User';
import type { Profile} from './types/Profile';
import { UserProfile } from './types/Profile';
import type { RootState} from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { profileLoad } from './profileSlice';

function ProfileInfo(): JSX.Element {
    const user: User = useAppSelector((store: RootState) => store.auth.user);
    const profile: Profile = useAppSelector((store: RootState) => store.profile.profile);
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState(false);
    const showModal = (): void => {
        setModal(true);
    }
    const closeModal = (): void => {
        setModal(false);
    }
    useEffect(() => {
        if (user) {
            dispatch(profileLoad(user.id))
        }
    }, [])
    return (
        <div>
            <h1>Личные данные</h1>
            {user.login && <div>Login: {user.login}</div>}
            {profile.img ? <div><img src={profile.img} alt="" /></div> :
            <div><img src='https://avatars.mds.yandex.net/i?id=73b4bfb589b8a8fe988fb3300fea843566ed6de5-12569748-images-thumbs&n=13' alt="" /></div>}
            {profile.name ? <div>{profile.name}</div> :
            <div>Имя не заполнено</div>}
            {profile.lastName ? <div>{profile.lastName}</div> :
            <div>Фамилия не заполнена</div>}
            {profile.age ? <div>{profile.age}</div> :
            <div>Возраст не указан</div>}
            {profile.phoneNumber ? <div>{profile.phoneNumber}</div> :
            <div>Номер телефона не указан</div>}
            {profile.name || profile.lastName || profile.age || profile.phoneNumber ?
            <button type="button" onClick={showModal}>Заполнить данные</button> : 
            <button type="button" onClick={showModal}>Изменить данные</button>}
        </div>
    );
}

export default ProfileInfo;
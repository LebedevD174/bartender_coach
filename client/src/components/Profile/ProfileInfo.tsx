import React, { useState } from 'react';
import { User } from '../Auth/types/User';
import { UserProfile } from './types/Profile';
import { RootState, useAppDispatch, useAppSelector } from '../../app/redux/store';

function ProfileInfo(): JSX.Element {
    const user: UserProfile = useAppSelector((store: RootState) => store.auth.user);
    const dispatch = useAppDispatch();
    const [modal, setModal] = useState(false);
    const showModal = (): void => {
        setModal(true);
    }
    const closeModal = (): void => {
        setModal(false);
    }
    return (
        <div>
            <h1>Личные данные</h1>
            {user.email ? <div>Email: {user.email}</div> :
            <div>Login: {user.login}</div>}
            {user.Profile.img ? <div><img src={user.Profile.img} alt="" /></div> :
            <div><img src='https://avatars.mds.yandex.net/i?id=73b4bfb589b8a8fe988fb3300fea843566ed6de5-12569748-images-thumbs&n=13' alt="" /></div>}
            {user.Profile.name ? <div>{user.Profile.name}</div> :
            <div>Имя не заполнено</div>}
            {user.Profile.lastName ? <div>{user.Profile.lastName}</div> :
            <div>Фамилия не заполнена</div>}
            {user.Profile.age ? <div>{user.Profile.age}</div> :
            <div>Возраст не указан</div>}
            {user.Profile.phoneNumber ? <div>{user.Profile.phoneNumber}</div> :
            <div>Номер телефона не указан</div>}
            {user.Profile.name || user.Profile.lastName || user.Profile.age || user.Profile.phoneNumber ?
            <button type="button" onClick={showModal}>Заполнить данные</button> : 
            <button type="button" onClick={showModal}>Изменить данные</button>}
        </div>
    );
}

export default ProfileInfo;
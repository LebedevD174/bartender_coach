import React, { useState } from 'react';

function ProfileInfo(): JSX.Element {
    const user = useAppSelector((store) => store.users.user);
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
            {user.Profile.img ? <div><img src={user.Profile.img} alt="" /></div> :
            <div><img src='https://avatars.mds.yandex.net/i?id=73b4bfb589b8a8fe988fb3300fea843566ed6de5-12569748-images-thumbs&n=13' alt="" /></div>}
            {user.Profile.name ? <div>{user.Profile.name}</div> :
            <div>Имя не заполнено</div>}
            {user.Profile.lastName ? <div>{user.Profile.lastName}</div> :
            <div>Фамилия не заполнена</div>}
            {user.Profile.age ? <div>{user.Profile.age}</div> :
            <div>Возраст не указан</div>}
            {user.Profile.email ? <div>{user.Profile.email}</div> :
            <div>Email не указан</div>}
            {user.Profile.login ? <div>{user.Profile.login}</div> :
            <div>Логин не указан</div>}
            {user.Profile.phoneNumber ? <div>{user.Profile.phoneNumber}</div> :
            <div>Номер телефона не указан</div>}
            {user.Profile.name || user.Profile.lastName || user.Profile.age || user.Profile.email || user.Profile.login || user.Profile.phoneNumber ?
            <button type="button" onClick={showModal}>Заполнить данные</button> : 
            <button type="button" onClick={showModal}>Изменить данные</button>}
            
        </div>
    );
}

export default ProfileInfo;
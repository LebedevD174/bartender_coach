/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import type { User } from '../Auth/types/User';
import type { Profile} from './types/Profile';
import type { RootState} from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import ProfileEditForm from './ProfileEditForm';
import Modal from '../ui/Modal';

function ProfileInfo(): JSX.Element {
    const user: User | undefined = useAppSelector((store: RootState) => store.auth.user);
    const profile: Profile | undefined  = useAppSelector((store: RootState) => store.profile.profile);
    const [showEditForm, setShowEditForm] = useState(false);

  const handleFormSubmit = (): void => {
    setShowEditForm(false);
  };

  return (
    <div className="ProfileCard">
      <h1>Личные данные</h1>
      <div className='prof'>
        {profile && profile.img ? (
          <div>
            <img src={profile.img} alt="" />
          </div>
        ) : (
          <div>
            <img
              src="https://avatars.mds.yandex.net/i?id=73b4bfb589b8a8fe988fb3300fea843566ed6de5-12569748-images-thumbs&n=13"
              alt=""
            />
          </div>
        )}
        <div className='infoProfile'>
          <div>Email: {user?.email}</div>
          <div>Login: {user?.login}</div>
          {profile && profile.name ? <div>{profile.name}</div> : <div>Имя не заполнено</div>}
          {profile && profile.lastName ? (
            <div>{profile.lastName}</div>
          ) : (
            <div>Фамилия не заполнена</div>
          )}
          {profile && profile.age ? <div>{profile.age}</div> : <div>Возраст не указан</div>}
          {profile && profile.phoneNumber ? (
            <div>{profile.phoneNumber}</div>
          ) : (
            <div>Номер телефона не указан</div>
          )}
          <button type="button" onClick={() => setShowEditForm(true)}>
            Изменить данные
          </button>
        </div>
      </div>

      {showEditForm && (
        <Modal isOpen={showEditForm} onClose={() => setShowEditForm(false)}>
          <ProfileEditForm onSubmitSuccess={handleFormSubmit} />
        </Modal>
      )}
    </div>
  );
}

export default ProfileInfo;

/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import type { User } from '../Auth/types/User';
import type { Profile } from './types/Profile';
import type { RootState } from '../../app/redux/store';
import { useAppSelector } from '../../app/redux/store';
import ProfileEditForm from './ProfileEditForm';
import Modal from '../ui/Modal';

function ProfileInfo(): JSX.Element {
  const user: User | undefined = useAppSelector((store: RootState) => store.auth.user);
  const profile: Profile | undefined = useAppSelector((store: RootState) => store.profile.profile);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleFormSubmit = (): void => {
    setShowEditForm(false);
  };

  return (
    <div className="ProfileCard gradient">
      <h1>Личные данные</h1>
      <div className="prof">
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
        <div className="infoProfile">
          {profile && profile.name ? (
            <div className="line">
              <div className="titleProf">Имя:</div>
              <div>{profile.name}</div>
            </div>
          ) : (
            <div className="titleProf">Имя не заполнено</div>
          )}
          {profile && profile.lastName ? (
            <div className="line">
              <div className="titleProf">Фамилия:</div>
              <div>{profile.lastName}</div>
            </div>
          ) : (
            <div className="titleProf">Фамилия не заполнена</div>
          )}
          {profile && profile.age ? (
            <div className="line">
              <div className="titleProf">Возраст:</div>
              <div>{profile.age}</div>
            </div>
          ) : (
            <div className="titleProf">Возраст не указан</div>
          )}
          <div className="line">
            <div className="titleProf">email:</div>
            <div>{user?.email}</div>
          </div>
          <div className="line">
            <div className="titleProf">Логин:</div>
            <div>{user?.login}</div>
          </div>

          {profile && profile.phoneNumber ? (
            <div className="line">
              <div className="titleProf">Телефон:</div>
              <div>{profile.phoneNumber}</div>
            </div>
          ) : (
            <div className="titleProf">Номер телефона не указан</div>
          )}
          <button
            className="btn-update-profile"
            type="button"
            onClick={() => setShowEditForm(true)}
          >
            <p>Изменить данные</p>
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

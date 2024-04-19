/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import type { RootState } from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { User } from '../Auth/types/User';
import { profileUpdate } from './profileSlice';
import type { Profile } from './types/Profile';

function ProfileEditForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }): JSX.Element {
  const profile: Profile | undefined = useAppSelector((store: RootState) => store.profile.profile);
  const user: User | undefined = useAppSelector((store: RootState) => store.auth.user);

  const [name, setName] = useState(profile ? profile.name : '');
  const [lastName, setLastName] = useState(profile ? profile.lastName : '');
  const [img, setImg] = useState<File | string | null>(profile ? profile.img : null);
  const [age, setAge] = useState(profile ? profile.age : '');
  const [phoneNumber, setPhoneNumber] = useState(profile ? profile.phoneNumber : '');

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = new FormData();

    data.append('name', name);
    data.append('lastName', lastName);
    data.append('age', age.toString());
    data.append('phoneNumber', phoneNumber.toString());
    if (img) {
      data.append('img', img);
    }
    data.append('profileId', user?.id.toString() || '');

    dispatch(profileUpdate(data))
      .then(() => {
        onSubmitSuccess();
        setName('');
        setImg(null);
        setLastName('');
        setAge('');
        setPhoneNumber('');
      })
      .catch((error) => {
        console.error('Ошибка при обновлении профиля:', error);
      });
  };

  return (
    <form className="editProfile" onSubmit={handleSubmit}>
      <div className="titleForm">Изменение личных данных</div>
      <div>
        <label className="title" htmlFor="img">
          Фотография:
        </label>
        <br/>
        <input
          type="file"
          id="img"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
              const file = e.target.files[0];
              setImg(file);
            }
          }}
        />
      </div>
      <div>
        <label className="title" htmlFor="name">
          Имя:
        </label>
        <br/>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="title" htmlFor="lastName">
          Фамилия:
        </label>
        <br/>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label className="title" htmlFor="age">
          Возраст:
        </label>
        <br/>
        <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div className="phone">
        <label className="title" htmlFor="phoneNumber">
          Номер телефона:
        </label>
        <br/>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button className="btn-create-select edit" type="submit">
        Сохранить изменения
      </button>
    </form>
  );
}

export default ProfileEditForm;

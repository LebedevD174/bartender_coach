/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import type { RootState} from '../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import type { User } from '../Auth/types/User';
import { profileUpdate } from './profileSlice';


function ProfileEditForm({onSubmitSuccess} ):JSX.Element {

 const profile: Profile = useAppSelector((store: RootState) => store.profile.profile);
 const user: User = useAppSelector((store: RootState) => store.auth.user);

 const [name, setName] = useState(profile ? profile.name : '');
 const [lastName, setLastName] = useState(profile ? profile.lastName : '');
 const [img, setImg] = useState(profile ? profile.img : '');
 const [age, setAge] = useState(profile ? profile.age : '');
 const [phoneNumber, setPhoneNumber] = useState(profile ? profile.phoneNumber : '');

 const dispatch = useAppDispatch();


 const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) : Promise<void> => {
    e.preventDefault();
    const data = {
        profileData: {
           img,
           name,
           lastName,
           age,
           phoneNumber,
        },
        profileId: user.id
       };
      dispatch(profileUpdate(data))

    onSubmitSuccess()
    setName('');
    setImg('');
    setLastName('');
    setAge('');
    setPhoneNumber('');
 };


 return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="img">Фотография:</label>
      <input
        type="text"
        name='img'
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <br />
      <label htmlFor="name">Имя:</label>
      <input
        type="text"
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="lastName">Фамилия:</label>
      <input
        type="text"
        name='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="age">Возраст:</label>
      <input
        type="number"
        name='age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label htmlFor="phoneNumber">Номер телефона:</label>
      <input
        type="tel"
        name='phoneNumber'
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <button type="submit">Сохранить изменения</button>
    </form>
 );
}

export default ProfileEditForm;

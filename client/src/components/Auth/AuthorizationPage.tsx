/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useAppDispatch } from '../../app/redux/store';
import {userLog} from './authSlice'

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const data = {
      email,
      password,
    };
    dispatch(userLog(data))
    }

  return (
    <div className='container-auth auth'>
      <div>
        <h2>Введите данные ученой записи:</h2>
        <form className="sign-in" onSubmit={onHandleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type='submit'>Log-In</button>
        </form>
      </div>
    </div>
  );
}

export default AuthorizationPage;

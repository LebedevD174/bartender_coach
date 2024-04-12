/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/redux/store';
// import {userLog} from './authSlice'

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
      // dispatch({ type: 'auth/login', payload: response.data.user });
      navigate('/');
    }

  return (
    <div className='container-auth auth'>
      <div>
        <h2>Введите данные учтеной записи:</h2>
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

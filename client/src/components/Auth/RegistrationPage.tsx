/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/redux/store';
import {userReg} from './authSlice'

function RegistrationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const data = {
      login,
      email,
      password,
      checkPassword
    };
        dispatch(userReg(data))
      }
  

  return (
    <div className='container-auth reg'>
      <h2>Заполните поля для регистрации:</h2>
      <form className='sign-up' onSubmit={onHandleSubmit}>
        <label htmlFor='name'>
          <input
            type='text'
            name='login'
            placeholder='Name'
            required
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor='email'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor='password'>
          <input
            type='password'
            name='password'
            placeholder='password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor='password'>
          <input
            type='password'
            name='password'
            placeholder='confirm password'
            required
            value={checkPassword}
            onChange={(e) => {
              setCheckPassword(e.target.value);
            }}
          />
        </label>
        <br />
        <div className='button-container'>
          <button type='submit'>Registration</button>
          <Link to='/auth' className='login-button'>
            {/* Sign in */}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegistrationPage;
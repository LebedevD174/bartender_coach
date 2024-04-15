/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';

import { userLog } from './authSlice';
import * as thunk from './authSlice'
import Modal from '../ui/Modal';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const user = useAppSelector((store) => store.auth.user)
  const error = useAppSelector((state) => state.auth.error)
  console.log(error);
  
  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(userLog(data));
  };

  
  const closeModal = () :void => {
    setIsModalOpen(false)
    dispatch(thunk.clearError())
}

useEffect(() => {
  if (error) {
      setIsModalOpen(true)
  }
  if(user){
    navigate('/')
  }
}, [error,user])

  return (
    <div className="container-auth auth">
      <div>
        <h2>Введите данные ученой записи:</h2>
        <form className="sign-in" onSubmit={onHandleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Log-In</button>
        </form>
      </div>
      <Link to="/registration">Зарегистрироваться</Link>
      <Modal children={error} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AuthorizationPage;

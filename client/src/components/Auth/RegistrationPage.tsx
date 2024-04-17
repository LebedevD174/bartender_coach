/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';
import { userReg } from './authSlice';
import Modal from '../ui/Modal';
import * as thunk from './authSlice';

function RegistrationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useAppSelector((store) => store.auth.user);
  const error = useAppSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = {
      login,
      email,
      password,
      checkPassword,
    };
    dispatch(userReg(data));
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    dispatch(thunk.clearError());
  };
  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
    if (user) {
      navigate('/');
    }
  }, [error, user]);

  return (
    <div className="container-auth reg">
      <div className="ring">
        <i className="--clr" />
        <i className="--clr" />
        <i className="--clr" />
        <div className="formAuth">
          <h2>Регистрация</h2>
          <form className="sign-up" onSubmit={onHandleSubmit}>
            <div className="inputBx">
              <input
                type="text"
                name="login"
                placeholder="Имя"
                value={login}
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
              />
            </div>

            <div className="inputBx">
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="inputBx">
              <input
                type="password"
                name="password"
                placeholder="пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="inputBx">
              <input
                type="password"
                name="password"
                placeholder="повторите пароль"
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </div>
            <div className="button-container">
              <div className="inputBx">
                <button type="submit">Registration</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal children={error} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default RegistrationPage;

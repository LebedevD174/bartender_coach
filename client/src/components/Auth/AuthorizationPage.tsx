/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/redux/store';

import { userLog } from './authSlice';
import * as thunk from './authSlice';
import Modal from '../ui/Modal';
import { profileLoad } from '../Profile/profileSlice';
import { fetchLoadProfile } from '../../app/api';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.auth.user);
  const error = useAppSelector((state) => state.auth.error);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(userLog(data));
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
      dispatch(profileLoad(user.id))
      navigate('/');
    }
  }, [error, user]);

  return (
    <div className="container-auth auth">
      <div className="ring">
        <i className="--clr" />
        <i className="--clr" />
        <i className="--clr" />
        <div className="formAuth">
          <h2>Вход</h2>
          <form className="sign-in" onSubmit={onHandleSubmit}>
            <div className="inputBx">
              <input
                type="text"
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
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="inputBx">
              <button type="submit">Войти</button>
            </div>
          </form>
          <div className="links">
            <Link to="/registration">
              <p>Зарегистрироваться</p>
            </Link>
          </div>
        </div>
      </div>
      <Modal children={error} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default AuthorizationPage;

/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/redux/store';
import { userLog } from './authSlice';
import Modal from '../ui/Modal';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    dispatch(userLog(data));
  };

  
 const closeModal = () => {
  setIsModalOpen(false);
};

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
      <Modal onClose={closeModal}/>
    </div>
  );
}

export default AuthorizationPage;

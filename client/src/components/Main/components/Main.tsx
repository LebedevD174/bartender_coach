/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAppDispatch } from '../../../app/redux/store';
import { userCheck } from '../../Auth/authSlice';
import { loadCocktails } from '../../Cocktails/cocktailsSlice';
import { profileLoad } from '../../Profile/profileSlice';
import type { User } from '../../Auth/types/User';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  const checkUser = async (): Promise<void> => {
    dispatch(userCheck()).then((data) => {
      const { user } = data.payload as { user: User | undefined };
      if (user && user.id) {
        dispatch(profileLoad(user.id));
      }
    });
  };

  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
    checkUser();
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main;

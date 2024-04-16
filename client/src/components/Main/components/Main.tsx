/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import type { RootState } from '../../../app/redux/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux/store';
import { userCheck } from '../../Auth/authSlice';
import { loadCocktails } from '../../Cocktails/cocktailsSlice';
import { loadDrinks } from '../../Drinks/drinksSlice';
import { profileLoad } from '../../Profile/profileSlice';

// Компонент главной страницы
function Main(): JSX.Element {
  const user = useAppSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  const checkUser = async (): Promise<void> => {
    dispatch(userCheck()).then((user) => {
      dispatch(profileLoad(user.id))
    })
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

import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useAppDispatch } from '../../../app/redux/store';
import { loadCocktails } from '../../Cocktails/cocktailsSlice';

// Компонент главной страницы
function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCocktails()).catch(console.log);
  }, [dispatch]);
  
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Main;

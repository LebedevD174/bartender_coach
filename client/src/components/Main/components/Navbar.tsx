/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Auth/Logout';
import type { RootState } from '../../../app/redux/store';
import { useAppSelector } from '../../../app/redux/store';
import type { User } from '../../Auth/types/User';
import type { Profile } from '../../Profile/types/Profile';

function Navbar(): JSX.Element {
  const user: User | undefined = useAppSelector((store: RootState) => store.auth.user);
  const profile: Profile | undefined = useAppSelector((store: RootState) => store.profile.profile);
  
  
  const isUserRegistered = user?.email || user?.login;
  return (
    <div className="navbar_top">
      <div className="navbar">
        <div className="top_navbar">
          <Link to="/"><img className='logo' src='/img/LOGO.png' alt=''/></Link>

          {isUserRegistered ? (
            <>
              <Link to="/drinks"><span>Напитки</span></Link>
              <Link to="/cocktails"><span>Коктейли</span></Link>
              {profile?.isAdmin === true && <Link to="/admin"><span>Модерация</span></Link>}
              <Link to="/coach"><span>Тренажер</span></Link>
              <Link to="/profile"><span>Личный кабинет</span></Link>
              <Logout />
            </>
          ) : (
            <Link to="/authorization"><span>Войти</span></Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

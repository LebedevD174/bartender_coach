/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Auth/Logout';
import type { RootState } from '../../../app/redux/store';
import { useAppSelector } from '../../../app/redux/store';
import type { User } from '../../Auth/types/User';
import type { Profile } from '../../Profile/types/Profile';
import { UserProfile } from '../../Profile/types/Profile';

function Navbar(): JSX.Element {
  const user: User = useAppSelector((store: RootState) => store.auth.user);
  const profile: Profile = useAppSelector((store: RootState) => store.profile.profile);

  const isUserRegistered = user?.email || user?.login;
  return (
    <div className="navbar_top">
      <div className="navbar">
        {profile?.name
          ? profile?.name
          : isUserRegistered
            ? `${user?.email || user?.login}`
            : 'Guest'}
        <div className="top_ref">
          <Link to="/">LOGO</Link>
          <Link to="/drinks">Напитки</Link>
          <Link to="/cocktails">Коктейли</Link>
          <Link to="/coach">Тренажер</Link>
          {isUserRegistered ? (
            <>
              <Link to="/profile">Личный кабинет</Link>
              <Logout />
            </>
          ) : (
            <Link to="/authorization">Войти</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

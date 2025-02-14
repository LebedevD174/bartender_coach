/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { Link } from 'react-router-dom'
import {userLogout} from './authSlice'
import { useAppDispatch } from '../../app/redux/store';
import { profileLogout } from '../Profile/profileSlice';

function Logout(): JSX.Element {
const dispatch = useAppDispatch();

  const logout = ():void => {
    dispatch(userLogout())
    dispatch(profileLogout())
    }

  return (
    <div className="top_ref"><Link onClick={logout} to = '/'><span>Выйти</span></Link></div>
  )
}

export default Logout
import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../Auth/Logout';
import { RootState, useAppSelector } from '../../../app/redux/store';
import { User } from '../../Auth/types/User';
import { Profile, UserProfile } from '../../Profile/types/Profile';


function Navbar():JSX.Element {
  const user: User = useAppSelector((store: RootState) => store.auth.user)
  const profile: Profile = useAppSelector((store: RootState) => store.profile.profile)
  return (
    <div className="navbar_top">
      <div className="navbar">
        {profile?.name ? profile?.name : user?.email || user?.login}
            <div className="top_ref"><Link to = '/authorization'>SIGN IN</Link></div>
            <div className="top_ref"><Link to = '/registration'>SIGN UP</Link></div>
            <div className="top_ref"><Link to = '/profile'>PROFILE</Link></div>
            <Logout/>
      </div>
    </div>
  );
}
    
export default Navbar
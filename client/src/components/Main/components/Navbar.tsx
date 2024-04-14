import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../Auth/Logout';


function Navbar():JSX.Element {
  return (
    <div className="navbar_top">
      <div className="navbar">
            <div className="top_ref"><Link to = '/authorization'>SIGN IN</Link></div>
            <div className="top_ref"><Link to = '/registration'>SIGN UP</Link></div>
            <div className="top_ref"><Link to = '/profile'>PROFILE</Link></div>
            <Logout/>
      </div>
    </div>
  );
}
    
export default Navbar
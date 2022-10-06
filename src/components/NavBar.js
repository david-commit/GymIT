import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-cont'>
      <div className='navbar'>
        <div className='logo'>
          Gym<span className='it'>IT</span>
        </div>
        <nav className='nav'>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/trainers'>
            Trainers
          </NavLink>
          <NavLink exact to='/join'>
            Join Us
          </NavLink>
          <NavLink exact to='/contact'>
            Contact Us
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

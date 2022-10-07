import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar-cont'>
      <div className='navbar'>
        <Link to='/GymIT'>
          <div className='logo'>
            Gym<span className='it'>IT</span>
          </div>
        </Link>
        <nav className='nav'>
          <NavLink
            exact
            to='/GymIT/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to='/GymIT/trainers/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Trainers
          </NavLink>
          <NavLink
            to='/GymIT/join/'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Join Us
          </NavLink>
          <NavLink
            to='/GymIT/contact/'
            exact
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

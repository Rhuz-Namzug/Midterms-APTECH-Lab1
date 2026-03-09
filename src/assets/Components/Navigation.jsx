import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          My App
        </NavLink>
        <div className="navbar-links">

          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/Students" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Students
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

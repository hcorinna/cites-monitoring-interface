import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="Header">
      <Link to="/">
        <img alt="Logo" className="Header-logo" src="favicon.ico"/>
      </Link>
      <NavLink key="plants" className="Header-link" exact to="/plants" activeClassName="active">Plants</NavLink>
    </nav>
  );
}

export default Header;

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="Header">
        <Link to="/">
          <img className="Header-logo" src="favicon.ico"/>
        </Link>
        <NavLink key="plants" className="Header-link" exact to="/plants" activeClassName="active">Plants</NavLink>
      </nav>
    );
  }
}

export default Header;

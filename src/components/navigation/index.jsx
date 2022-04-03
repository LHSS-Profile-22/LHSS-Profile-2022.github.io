import React, {useState} from 'react';
import '../navigation/navbar.scss';
import Overlay from '../overlay';
import logo from '../../images/navbar-logo.png';
import menuItem from '../../images/navbar-menu-item.svg';

export default function Navbar(props) {

  function toggleOverlay() {
    props.setShowOverlay(prev => !prev)
  }

    return (
      <header className="navbar">

        <img 
          src={logo}
          alt="Navbar Logo"
          className="navbar-logo"
        />

        <button
          className="menu-button"
          onClick={toggleOverlay}
        ><img 
          src={menuItem}
          alt="Menu Vector"
          className="menu-image"

        /></button>

      </header>
    );
};

import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__heading">My Portfolio</h1>
        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
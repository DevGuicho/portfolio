import React from 'react';
import Nav from './Nav';
import '@styles/Header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import '@styles/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <span>Dev</span>
        <span>Guicho</span>
      </div>
      <ul className="nav__list">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Education</li>
      </ul>
      <button className="btn">Hire Me</button>
    </nav>
  );
};

export default Nav;

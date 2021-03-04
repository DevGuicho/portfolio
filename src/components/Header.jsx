import React from 'react';
import Nav from './Nav';
import '@styles/Header.scss';
import person from '@images/person1.png';
import cv from '../assets/CV.pdf';
const Header = () => {
  return (
    <header>
      <Nav />

      <div className="container hero">
        <div className="hero__text">
          <h2>Hi, I'm</h2>
          <h1>Luis Vazquez</h1>
          <h3>React developer JR</h3>
          <p className="hero__description">
            I like tacos, pizza and all that I can eat <br />
            I'm in love with code
          </p>
          <div className="hero__buttons">
            <button className="btn">
              <a href={cv} download="CV_LuisVazquez">
                Download CV
              </a>
            </button>
            <button className="btn clear">Contact me</button>
          </div>
        </div>
        <div className="hero__img">
          <img src={person} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

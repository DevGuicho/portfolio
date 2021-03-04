import React from 'react';
import '@styles/About.scss';
import person from '@images/person2.png';

const About = () => {
  return (
    <section className="about">
      <div className="container container__about">
        <div className="about__img">
          <img src={person} alt="" />
        </div>
        <div className="about__text">
          <h2>About me</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas non libero et accumsan. Fusce lobortis orci ut libero
            lacinia porta. Aliquam tristique ultrices metus, quis convallis
            felis. Pellentesque egestas tincidunt diam pretium vehicula.
          </p>
          <ol className="contact">
            <li>
              <span>
                <i className="fas fa-user"></i>
                Name:
              </span>
              <p>Luis Vazquez Padilla</p>
            </li>
            <li>
              <span>
                <i className="fas fa-phone"></i>
                Phone:
              </span>
              <p>+52 55 19 03 81 67</p>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
                Email:
              </span>
              <p>luvazpa@gmail.com</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;

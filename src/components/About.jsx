import React from 'react';

const About = () => {
  return (
    <section>
      <div>
        <h2>About me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          egestas non libero et accumsan. Fusce lobortis orci ut libero lacinia
          porta. Aliquam tristique ultrices metus, quis convallis felis.
          Pellentesque egestas tincidunt diam pretium vehicula.{' '}
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
            <p>55 19 03 81 67</p>
          </li>
          <li>
            <span>
              <i className="fas fa-envelope"></i>
              email:
            </span>
            <p>luvazpa@gmail.com</p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;

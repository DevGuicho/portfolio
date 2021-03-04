import React from 'react';
import About from '../components/About';
import Education from '../components/Education';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import '@styles/Globals.scss';

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <h1>On Construction...</h1>
    </>
  );
};

export default App;

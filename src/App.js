import './App.css';
import React from 'react';
import ReactGA from 'react-ga4';
import { Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Formation from './pages/Formation';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
ReactGA.initialize('G-6EYDPQH5CN');
ReactGA.send("pageview");

function App() {
  return (
    <>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/formacao" component={ Formation } />
      <Route path="/formation" component={ Formation } />
      <Route path="/portfolio" component={ Projects } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contato" component={ Contact } />
      <Route path="/contact" component={ Contact } />
    </>
  );
}

export default App;

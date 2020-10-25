import React from 'react';
import '../styles/App.css';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/CV" />
        <Route exact path="/Contact" component={Contact} /> 
      </Switch>
    </div>
  );
}

export default App;

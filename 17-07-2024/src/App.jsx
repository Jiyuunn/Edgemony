import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrello from './components/Carrello';
import './App.css'; // Importare il file CSS per lo stile

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/carrello" component={Carrello} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

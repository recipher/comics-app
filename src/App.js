import React from 'react';
import { Router, Link } from '@reach/router';
import Characters from './components/Characters';
import Comics from './components/Comics';

const App = props => {
  return (
    <div>
      <Link to='/'><h2>Home</h2></Link>
      <Router>
        <Characters default path='/characters' />
        <Comics path='/comics/:character' />
      </Router>
    </div>
  );
};

export default App;

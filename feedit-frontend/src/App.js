import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import Navigation from './components/Navigation';

const App = () => (
  <Router>
    <Navigation />
    <Route exact path="/" component={LandingPage} />
  </Router>
);

export default App;

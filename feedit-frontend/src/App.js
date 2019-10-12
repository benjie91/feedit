import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import DashboardPage from './containers/DashboardPage';
import HomePage from './containers/HomePage';

import './assets/feedit-theme.css';

const App = () => (
  <Router>
    <Navigation />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/home" component={HomePage} />
    <Route exact path="/dashboard" component={DashboardPage} />
  </Router>
);

export default App;

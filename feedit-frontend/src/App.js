import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

import DashboardPage from './containers/DashboardPage';
import HomePage from './containers/HomePage';
import RegistrationPage from './containers/RegistrationPage';
import NotFoundPage from './containers/NotFoundPage';

const App = () => {
  const sideMenuWidth = 220;

  return (
    <Router>
      <Navigation />
      <div id="feedit-body" style={{ top: '56px', position: 'relative' }}>
        <SideMenu style={{ position: 'fixed', width: `${sideMenuWidth}px` }} />
        <div
          style={{
            position: 'sticky',
            left: `${sideMenuWidth}px`,
            width: `calc(100% - ${sideMenuWidth}px)`,
            padding: '15px',
          }}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';

import DashboardPage from './containers/DashboardPage';
import HomePage from './containers/HomePage';
import RegistrationPage from './containers/RegistrationPage';
import NotFoundPage from './containers/NotFoundPage';
import SystemPage from './containers/SystemsPage';

const App = () => {
  const sideMenuExpandedWidth = 220;
  const sideMenuMinimizedWidth = 60;

  const [sideMenuExpanded, setSideMenuExpanded] = useState(true);

  return (
    <Router>
      <Navigation />
      <div id="feedit-body" style={{ top: '56px', position: 'relative' }}>
        <SideMenu
          sideMenuExpandedWidth={sideMenuExpandedWidth}
          sideMenuMinimizedWidth={sideMenuMinimizedWidth}
          onChange={state => {
            setSideMenuExpanded(state);
          }}
        />
        <div
          style={{
            position: 'sticky',
            left: sideMenuExpanded
              ? `${sideMenuExpandedWidth}px`
              : `${sideMenuMinimizedWidth}px`,
            width: `calc(100% - ${
              sideMenuExpanded ? sideMenuExpandedWidth : sideMenuMinimizedWidth
            }px)`,
            padding: '15px',
          }}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/systems" component={SystemPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

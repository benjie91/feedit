import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import SideMenu from './components/SideMenu';
import DashboardPage from './containers/DashboardPage';
import HomePage from './containers/HomePage';

const App = () => {
  const sideMenuWidth = 220;

  return (
    <Router>
      <Navigation />
      <div id="feedit-body" style={{ top: '56px', position: 'relative' }}>
        <SideMenu style={{ position: 'fixed', width: `${sideMenuWidth}px` }} />
        <div
          style={{
            marginLeft: `${sideMenuWidth}px`,
            width: `calc(100% - ${sideMenuWidth}px)`,
            padding: '5px',
          }}
        >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;

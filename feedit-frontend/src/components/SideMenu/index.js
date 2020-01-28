import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import MenuItem from './MenuItem';
import MenuSeparator from './MenuSeparator';

const SideMenu = ({
  customStyle,
  history,
  onChange,
  sideMenuExpandedWidth,
  sideMenuMinimizedWidth,
}) => {
  const [sideMenuExpanded, setSideMenuExpanded] = useState(true);

  const sideMenuStyle = Object.assign(
    {},
    {
      position: 'fixed',
      width: sideMenuExpanded
        ? `${sideMenuExpandedWidth}px`
        : `${sideMenuMinimizedWidth}px`,
      height: '100vh',
      borderRight: '1px solid gray',
      backgroundColor: '#3e3e3e',
    },
    customStyle,
  );

  return (
    <div style={sideMenuStyle}>
      <MenuItem
        item="System Registration"
        onClick={() => {
          history.push('register');
        }}
        fontAwesomeIcon="cheese"
        minimized={!sideMenuExpanded}
      />
      <MenuSeparator />
      <MenuItem
        item="Systems"
        onClick={() => {
          history.push('systems');
        }}
        fontAwesomeIcon="coffee"
        minimized={!sideMenuExpanded}
      />
      <MenuItem
        item="Dashboard"
        onClick={() => {
          history.push('dashboard');
        }}
        fontAwesomeIcon="chart-line"
        minimized={!sideMenuExpanded}
      />
      <MenuSeparator />
      <MenuItem
        item="Management"
        onClick={() => {
          history.push('management');
        }}
        fontAwesomeIcon="tasks"
        minimized={!sideMenuExpanded}
      />
      <MenuItem
        item="Hide Menu"
        onClick={() => {
          const newState = !sideMenuExpanded;
          setSideMenuExpanded(newState);
          onChange(newState);
        }}
        fontAwesomeIcon="bars"
        customStyle={{ position: 'absolute', bottom: '65px', left: '0px' }}
        minimized={!sideMenuExpanded}
      />
    </div>
  );
};

export default withRouter(SideMenu);

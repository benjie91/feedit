import React from 'react';

import MenuItem from './MenuItem';

const SideMenu = ({ style }) => {
  const sideMenuStyle = Object.assign({}, style, {
    height: '100vh',
    borderRight: '1px solid gray',
    backgroundColor: '#3e3e3e',
  });

  return (
    <div style={sideMenuStyle}>
      <MenuItem
        item="System Registration"
        itemLink="register"
        fontAwesomeIcon="coffee"
      />
    </div>
  );
};

export default SideMenu;

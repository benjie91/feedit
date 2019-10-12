import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({ item, itemLink, fontAwesomeIcon, history }) => {
  return (
    <div
      style={{
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
      }}
      onClick={() => {
        history.push(itemLink);
      }}
    >
      <FontAwesomeIcon icon={fontAwesomeIcon} style={{ marginRight: '10px' }} />
      <span>{item}</span>
    </div>
  );
};

export default withRouter(MenuItem);

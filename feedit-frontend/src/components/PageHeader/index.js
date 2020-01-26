import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageHeader = ({ header, fontAwesomeIcon, rightElement }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h3 style={{ marginBottom: '15px' }}>
        <FontAwesomeIcon
          icon={fontAwesomeIcon}
          style={{ marginRight: '10px' }}
        />
        {header}
      </h3>
      {rightElement}
    </div>
  );
};

export default PageHeader;

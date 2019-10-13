import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PageHeader = ({ header, fontAwesomeIcon }) => {
  return (
    <h3>
      <FontAwesomeIcon icon={fontAwesomeIcon} style={{ marginRight: '10px' }} />
      {header}
    </h3>
  );
};

export default PageHeader;

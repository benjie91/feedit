import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuItem = ({
  item,
  onClick,
  fontAwesomeIcon,
  customStyle,
  minimized,
}) => {
  const style = Object.assign(
    {},
    {
      color: 'white',
      padding: '10px 10px 0px 15px',
      cursor: 'pointer',
      width: '100%',
    },
    customStyle,
  );

  if (!minimized) {
    return (
      <div style={style} onClick={onClick}>
        <FontAwesomeIcon icon={fontAwesomeIcon} />
        <span style={{ marginLeft: '10px' }}>{item}</span>
      </div>
    );
  }

  const minimizedStyle = Object.assign({}, style, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '13px 0px 0px 0px',
  });

  return (
    <div style={minimizedStyle} onClick={onClick}>
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </div>
  );
};

export default MenuItem;

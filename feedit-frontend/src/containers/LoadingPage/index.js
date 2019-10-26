import React from 'react';
import mainLogo from '../../assets/images/feedit-loading.svg';

const LoadingPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <img
        src={mainLogo}
        style={{ marginBottom: '30px' }}
        width="90"
        height="90"
        alt="Feedit Loading"
      />
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '15px',
        }}
      >
        Please wait while we are preparing your page.
      </div>
    </div>
  );
};

export default LoadingPage;

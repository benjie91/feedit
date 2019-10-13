import React from 'react';

import PageHeader from '../../components/PageHeader';

const HomePage = () => {
  return (
    <div>
      <PageHeader header="Feedit System" fontAwesomeIcon="home" />
      <p>
        Feedit is a web application that helps you consolidate feedback from
        your users. Just ask the right questions and hook up to feedit to see
        these answered!
      </p>
      <p>
        Before you can start analyzing on your user feedback, you need to
        register your system with feedit.
      </p>
    </div>
  );
};

export default HomePage;

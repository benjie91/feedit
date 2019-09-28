import React, { useEffect } from 'react';

const Navigation = () => {
  useEffect(() => {
    fetch('/api/feedback/retrieve/test')
      .then(res => {
        return res.text();
      })
      .then(feedbacks => {
        console.info(feedbacks);
      });
  });

  return <div>Navigation Menu</div>;
};

export default Navigation;

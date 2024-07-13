import React from 'react';
import { useLocation } from 'react-router-dom';


const WelcomePage = () => {
  const location = useLocation();
  console.log(location.state)

  return (
    <div>
      <h2>{location.state.message}</h2>
    </div>
  );
};

export default WelcomePage;

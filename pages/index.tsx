import React, { useState } from 'react';
import LoginContainer from '../components/LoginContainer/LoginContainer';
import InfoContainer from '../components/InfoContainer/InfoContainer'; // Make sure this component exists

const Home: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true when login is successful
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginContainer onLoginSuccess={handleLoginSuccess} />
      ) : (
        <InfoContainer /> // Render InfoContainer or other content after login
      )}
    </div>
  );
};

export default Home;

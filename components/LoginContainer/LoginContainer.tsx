import React, { useState } from 'react';
import styles from './LoginContainer.module.css';

// Add a prop type for onLoginSuccess
interface LoginContainerProps {
  onLoginSuccess: () => void;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ onLoginSuccess }) => {
  const [passcode, setPasscode] = useState('');

  const handleLogin = () => {
    if (passcode === 'ceremony') {
      onLoginSuccess(); // Call this function when the passcode is correct
    } else {
      alert('Incorrect passcode. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Enter Passcode</h1>
      <input
        type="password"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
        placeholder="Passcode"
        id="passcode"
      />
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
};

export default LoginContainer;

import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>This website is currently under construction.</h1>
        <h2>Please check back soon for updates!</h2>
        <h3>Thank you for your patience. I just need to finish Senior Design.</h3>
    </div>
  );
};

export default Header;
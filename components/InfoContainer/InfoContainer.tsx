import React from 'react';
import Header from '../Header/Header';
import GoogleMap from '../GoogleMap';
// import Hotels from './Hotels';
// import Weather from './Weather';
// import Restaurants from './Restaurants';
// import Schedule from './Schedule';
// import Footer from './Footer';
import styles from './InfoContainer.module.css';

const InfoContainer = () => {
  return (
    <div className={styles.infoContainer}>
      <Header />
      <GoogleMap />
      {/* <Hotels />
      <Weather />
      <Restaurants />
      <Schedule />
      <Footer /> */}
    </div>
  );
};

export default InfoContainer;

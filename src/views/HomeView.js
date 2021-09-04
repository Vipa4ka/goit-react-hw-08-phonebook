import React from 'react';
import styles from './views.module.css';

const HomeView = () => (
  <div className={styles.HomeViewContainer}>
    <p className={styles.HomeViewTitleP}>Welcome to </p>
    <h2 className={styles.HomeViewTitleH}>Phonebook</h2>
  </div>
);

export default HomeView;
